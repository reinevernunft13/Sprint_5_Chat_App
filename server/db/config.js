const mongoose = require('mongoose');
const { Rooms } = require('../models/Rooms.js');

//Builds the MongoDB connection string
const mongoURI = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

mongoose.set('strictQuery', true);

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

const initDB = async () => {
  
  try {
      //Connects to MongoDB
      await mongoose.connect(mongoURI, dbOptions);
      console.log(`Connected to MongoDB database ${process.env.DB_NAME}`);
      //Creates db with DB_NAME if it doesn't exist by creating a document in the collection ChatRoom 
      const found = await Rooms.findOne({ roomName:'general' });
      if(!found) {
      const room = await Rooms.create({ roomName:'general'});
    }
  } catch(err) {
        console.log(err.message);
  }

}

module.exports = initDB;

