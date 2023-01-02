const { config } = require('dotenv');
config();

const express = require('express');
const path = require('path');

const app = express();

//Middlewares
app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.CLIENT_PORT,() => {
    console.log(`Client server: http://localhost:${process.env.CLIENT_PORT}`)
});