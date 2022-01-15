const express = require('express');
const router = express.Router();
const userRegister = require('../controller/registerUserController');

//post email and password auth
router.route('/registration/user').post(userRegister);
//for errors
router.route('*').post((req, res) => {
    res.status(404).send('Page not found')
});

module.exports = router;