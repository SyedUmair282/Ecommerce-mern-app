const Users = require('../database/Models/user');
const asynchandler = require('express-async-handler');

const userProfile = asynchandler(async(req, res) => {
    const user = await Users.findById(req.userData._id)
    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(404);
        res.send('user not found')
    }
    // res.send('success')
})
module.exports = userProfile