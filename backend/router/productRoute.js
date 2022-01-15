const express = require('express');
const router = express.Router();
const Getting = require('../controller/productController')
    //express async handler is used to avoid try catch pattern
router.route('/products').get(Getting);
router.get('*', (req, res) => {
    res.status(404).send('Page not found')
});

module.exports = router;