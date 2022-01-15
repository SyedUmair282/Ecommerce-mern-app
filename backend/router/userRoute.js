const express = require('express');
const router = express.Router();
const userAuth = require('../controller/userController');

//post email and password auth
router.route('/login').post(userAuth);
//for errors
router.route('*').post((req, res) => {
    res.status(404).send('Page not found')
});

module.exports = router;