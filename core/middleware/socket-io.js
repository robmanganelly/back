const winston = require('winston');

const AppError = require("../../tools/error.handling/appError");
const mongoose = require("mongoose");
const {Room} = require("../../endpoints/rooms/schema");
const {dev_log} = require("../../tools/error.handling/unc-except-logger");
const {Message} = require("../../endpoints/messages/schema");
module.exports.socketIoConfig = (socket, io ) => {
    // (socket, next  /*required if used as middleware*/ ) => {

    let room = socket.id;

    socket.join(room)

    socket.on('logged',(nodata)=>{
        dev_log('info','emitting welcome');
        //can be useful for further logic
        socket.emit('welcome','no data');
    })

    socket.on('new-room',async (roomId)=>{
        const room = await Room.findById(roomId);
        if(!room ){
            dev_log('warn','not found room'+room+'on this server')
        }
        const data = room.members.map(member=>String(member));
        io.emit('reload-rooms',data);
        // if user is a member must trigger a request to reload rooms
    })

    socket.on('scan',async(id)=>{
        const rooms = await Room.find({
            members: id
        })
        rooms.forEach(room=>socket.join(room._id));
    })

    socket.on('join-new-room',async (_room) => {
        try{
            if(!mongoose.Types.ObjectId.isValid(_room)){
                throw new AppError('invalid value provided as ObjectId ')
            }
            dev_log('info','received join new room event')
            dev_log('info', `user ${socket.id} has joined to room ${_room} of total : ${socket.rooms.size}`);
            socket.join(_room);
            const room = await Room.findById(_room);
            if (!room){
                dev_log('error','room not found')
                throw new AppError('room not found');
            }
            dev_log('info','emitting event joined to: '+_room)
            socket.emit('joined-to',room)
        }
        catch (e){
            console.log(e)
        }
    })


    socket.on('disconnect', (reason) => {
        console.log(`the user ${socket.id} has left the chat due  ${reason}`);
    })

    socket.on('new-message', async (msg,callback) => {
        try{
            if (socket.id === room) {room = msg.owner.toString();}
            // room owner to text sent state
            // if (!!msg._id){ delete msg._id}
            const _msg = await Message.create({room, ...msg})
            dev_log('info',`${_msg}`)
            if (!_msg) {
                throw new AppError('can not crate message: Unknown Error',500)
            }

            socket.to(room.toString()).emit('server-msg', _msg)
            callback(_msg._id)
            dev_log('info',`emitted event "server-msg" from${socket.id} with value ${_msg} to room: ${room}`)

        } catch (e){
            winston.loggers.get('socket-io_logger').log({
                level: 'error', message:`${e.name}:  ${e.message}, \nfull error: ${e}`})
        }
    })


}

