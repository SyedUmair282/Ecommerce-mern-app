const Users = require('../database/Models/user');
const asynchandler = require('express-async-handler');
const genToken = require('../utils/generateToken');

const registerUser = asynchandler(async(req, res) => {
    const { name, email, password } = req.body
    const userExist = await Users.findOne({ email })
    if (userExist) {
        res.status(401);
        res.send("User already exist")
    }
    const user = await Users.create({ name, email, password, isAdmin: false })
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: genToken(user._id)
        })
    } else {
        res.status(404);
        res.send('user not found');
    }

})
module.exports = registerUser