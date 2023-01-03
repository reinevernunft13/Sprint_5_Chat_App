const { Users } = require('../models/Users.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const login = async (req, res) => {

    const userName = req.body.userName;
    const password = req.body.password;
    
    console.log('user input is :' + userName, password);

    if(!userName || !password) {
        return res.status(400).json({
            status: 'error',
            error: 'Username/password not provided'
        });
    }
   
    const userFound = await Users.findOne({ userName });

    if(!userFound) {
        return res.status(401).json({
            status: 'error',
            error: '401 - Unauthorized Access: Invalid username/password'
        })
    }

    const validPassword = await bcrypt.compare(password, userFound.password);

    if(validPassword) {
            
        const payload = {
            userId: userFound._id,
            userName: userFound.userName
        }
        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_KEY);
        return res.status(200).json({
            status: 'ok',
            payload: payload,
            accessToken: accessToken
        });
    
    } else {
        return res.status(401).json({
            status: 'error',
            error: '401 - Unauthorized Access: Invalid username/password'
        })
    }
 
}

module.exports = login;