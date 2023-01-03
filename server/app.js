const { config } = require('dotenv');
config();

//dependencies imports
const express = require('express');
const cors = require('cors');
const { Server } = require('socket.io');

//module imports
const  socketEvents = require('./sockets/sockets.js');
const initDB = require('./db/config.js');

// initializes express app
const app = express();

// Connects to database
initDB();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/register', require('./routes/register.js'));
app.use('/login', require('./routes/login.js'));

// invalid route handling
app.use((req, res) => res.status(404).json({ status: "error", error: "ERROR 404 - PAGE NOT FOUND"}));

// starts http server
const httpServer = app.listen(process.env.API_PORT, () => {
    console.log(`http server running on port ${process.env.API_PORT}`)
});

// Sets up socket.io server
const io = new Server(httpServer, {
    cors: {
        origin: '*'
    },
}); 

socketEvents(io);



