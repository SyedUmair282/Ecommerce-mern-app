const Users = require('../database/Models/user');
const asynchandler = require('express-async-handler');
const genToken = require('../utils/generateToken');
//express async handler is used to avoid try catch pattern
const usersAuth = asynchandler(async(req, res) => {
    const { email, password } = req.body
    const user = await Users.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: genToken(user._id)
        })
    } else {
        throw new Error('Invalid email or password')
    }

})

module.exports = usersAuth;