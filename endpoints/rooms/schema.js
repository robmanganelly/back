const mongoose = require('mongoose');
// rooms are defined as
//  members, // array of users id, must be populated
//  createdAt, timestamp for sorting rooms
//  roomName, a string ( that can be modified by anyone?)
//  messages: an array of Objectid messages of .

const schema = new mongoose.Schema({
    isGroup:{
        type: Boolean,
        default: false
    },
    roomPhoto:{
      type: String,
      default:'user-default.png'
    },
    members: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
        required: true,
        validate:{
            validator:function (members){return members.length > 1},
            message:'can not store single-member rooms'
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    roomName:{
        type: String,
        required: [true,'a room needs a name'],
        maxlength: [50, 'please a 5 to 50 characters room\'s name '],
        minlength: [5, 'please a 5 to 50 characters room\'s name ']
    }
    // better on parent reference, since it can be too much
    // messages: [mongoose.Schema.Types.ObjectId]
})
schema.pre('save', async function(next){
    const {isGroup} = this;
    if (isGroup) return next();
    const existent = await this.constructor.find(
        {$and: [{isGroup: false},
                {members: { $all: [...this.members]}},
                {members: { $size: this.members.length}}
            ]}
    );
    console.log(existent);
    if (existent.length === 0) return next();
    if (existent.length > 0) return next (new Error('failed to create duplicated room'));
})

module.exports.Room = mongoose.model('Room',schema);
