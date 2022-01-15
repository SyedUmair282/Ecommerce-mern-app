const jwt = require('jsonwebtoken');
const User = require('../database/Models/user');

const protect = async(req, res, next) => {
    let token;
    //console.log(req.headers.authorization);
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decode = jwt.verify(token, process.env.JWT_KEY)
            req.userData = await User.findById(decode.id).select('-password')
            console.log('req.user data==>', req.userData);
            next()
        } catch (error) {
            res.status(401);
            res.send("token failed")
        }
    }
    if (!token) {
        res.status(401)
        res.send("error")
    }
}
module.exports = protect