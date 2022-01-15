// const Users = require('../database/Models/user');
// const asynchandler = require('express-async-handler');
// const genToken = require('../utils/generateToken');

// const updateProfile = asynchandler(async(req, res) => {
//     const user = await Users.findById(req.userData._id)
//     if (user) {

//         user.name = req.body.name || user.name
//         user.email = req.body.email || user.email
//         if (req.body.password) {
//             user.password = req.body.password
//         }
//         const updateUser = await user.save();
//         res.json({
//             _id: updateUser._id,
//             name: updateUser.name,
//             email: updateUser.email,
//             isAdmin: updateUser.isAdmin,
//             token: genToken(updateUser._id)
//         })


//     } else {
//         res.status(404);
//         res.send('user not found')
//     }
//     // res.send('success')
// })
// module.exports = updateProfile