const Orders = require('../database/Models/order');
const asynchandler = require('express-async-handler');

const userOrder = asynchandler(async(req, res) => {
    const {
        orderItems,
        shipping,
        paymentMethod,
        shippingPrice,
        totalPrice
    } = req.body;
    //const uorder = req.body
    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('No order found');
    } else {
        const order = new Orders({
            User: req.userData._id,
            orderItems,
            shipping,
            paymentMethod,
            shippingPrice,
            totalPrice
        })
        const createOrder = await order.save();
        res.status(201).json(createOrder)
    }
    // res.send('success')
})
module.exports = userOrder;