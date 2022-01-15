const express = require('express');
const protect = require('../middleware/authMiddleware');
const userOrder = require('../controller/orderController')
const router = express.Router();


router.route('/order').post(protect, userOrder);
module.exports = router;