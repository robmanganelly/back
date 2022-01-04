const AppError = require("../../tools/error.handling/appError");
const {envelop} = require("../../tools/routing/envelop");
const {Room} = require("../rooms/schema");
const {catchAsync} = require("../../tools/error.handling/catchAsync");
const { Message } = require("./schema")

module.exports.getAllMessages = catchAsync(async function (req, res, next){
    const id = req.params.id;

    const sortedMessages = await Room.aggregate([
        {$match: {members: id}},
        {$project:{_id: 1 }},
        {$lookup: {from:'messages', localField:'_id', foreignField: 'room', as : 'sent_messages'}},
        // {$unwind: '$sent_messages' },

    ])


    res.status(200).json(envelop(sortedMessages,'all messages sent'))
})

module.exports.getAllMessagesFromRoom = catchAsync(async function(req, res, next){
    // requires a room id
    const { room } = req.params;

    if (!room || typeof room !== "string"){
        return next(new AppError('need to provide a room to load messages from',400));
    }
    const messages = await Message.find({room});
    return res.status(200).json({
        status:'success',
        data:{data: messages},
        message: `all messages from room ${room.substring(0, Math.ceil(room.length/2) )}... sent`
    })
},'router')


