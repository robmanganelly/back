const AppError = require("../../tools/error.handling/appError");
const {catchAsync} = require("../../tools/error.handling/catchAsync");
const {envelop} = require("../../tools/routing/envelop");
const { Room } = require("./schema");

async function createRoomFunction(req, res, next){

        let {isGroup, members, roomName, roomPhoto} = req.body;
        const id = req.params.id;


        if ( !roomName || !members || !id ){
            return next(new AppError('Malformed Request: missing required fields, name and members are mandatory',400));
        }

        if (!members.includes(id)){
            members.push(id); // todo implement index on members (schema) , esto es paa hacer que la room sea unica
        }

        roomPhoto = !!req.file ? req.file.filename  : 'user-default.png';

        const room = await Room.create({isGroup: !!isGroup, roomPhoto, members, roomName, createdAt: new Date()});

        if (!room){ return next(new AppError('unknown error while creating room!',500))}

        return res.status(201).json(envelop(room, 'room created successfully'))
    }

async function getUserRoomsFunction(req, res, next){
    const id = req.params.id;

    if (!id) {
        return next(new AppError('must provide a user to load rooms',400))
    }

    const rooms = await Room.find({members: id }, )
        .sort({createdAt: -1})
        .populate('members', '_id photo email')

    rooms.forEach(room=>{
            if (room.members.length === 2){
                const target = room.members.find(m=> {
                    return (String(id) !== String(m._id) )})
                room.roomPhoto = target.photo;
                room.roomName = target.email;
            }
        })

    return res.status(200).json(envelop(rooms, ' all user rooms sent'));
}

module.exports.createRoom = catchAsync(createRoomFunction,'router');
module.exports.getUserRooms = catchAsync(getUserRoomsFunction,'router')
