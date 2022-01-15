const express = require('express');
const router = express.Router();
const userProfile = require('../controller/userProfileController')
const protect = require('../middleware/authMiddleware')
    //user profile private route
    //protect function is a middleware
router.route('/profile').get(protect, userProfile);
//for errors
router.route('*').get((req, res) => {
    res.status(404).send('Page not found')
});

module.exports = router;