const Products = require('../database/Models/product');
const asynchandler = require('express-async-handler');
//express async handler is used to avoid try catch pattern
const getProducts = asynchandler(async(req, res) => {
    const products = await Products.find({});
    res.json(products);
})
module.exports = getProducts;