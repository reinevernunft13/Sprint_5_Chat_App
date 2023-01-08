const mongoose = require('mongoose');

const roomsSchema = new mongoose.Schema({
    roomName: String,
    messages: [{ 
        user: {
            userName: String, 
            userId: String
        }, 
        room: {
            roomName: String, 
            roomId: String
        }, 
        text: String }]
}, 
{
    timestamps: true,
    versionKey: false,
  }
);

const Rooms = mongoose.model('Rooms', roomsSchema);
module.exports = { Rooms };