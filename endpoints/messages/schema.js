const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Room',
        required: [true,'please define a room for sending messages']
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true,'a message needs a sender']
    },
    to: {
        type: String,
        default: function(){return this.room}
    },
    text: {
        type: String,
        required: [true,'a message needs a text'],
        maxlength:[1000,'too long, please do not exceed 1000 characters']
    },
    sent: {
        type: Date,
        default: Date.now
    },
    state: {
        type: Number,
        min: [0, 'wrong status']
    },
});

schema.pre('save',async function(next){
    this.state = 1;
    next()
})

module.exports.Message = mongoose.model('Message',schema);
