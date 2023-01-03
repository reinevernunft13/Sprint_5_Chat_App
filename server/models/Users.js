const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({

    userName: String,
    password: String,
    room:{
        roomId: String,
        roomName: String
    },
}, 
{
    timestamps: true,
    versionKey: false,
  }
);

const Users = mongoose.model('Users', usersSchema);

module.exports = { Users };
