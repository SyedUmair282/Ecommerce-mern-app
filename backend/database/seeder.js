const mongoose = require('mongoose');
const dotenv = require('dotenv');

const users = require('./sampleuser');
const products = require('../products');
const user_model = require('./Models/user');
const product_model = require('./Models/product');
const order_model = require('./Models/order');

const connectDB = require('./connect');

dotenv.config();
connectDB();


const sendDataToDatabase = async() => {
    try {
        await user_model.deleteMany();
        await product_model.deleteMany();
        await order_model.deleteMany();
        const createUser = await user_model.insertMany(users);
        const adminUser = createUser[0]._id;
        const sampledata = products.map((value) => {
            return {
                ...value,
                adminUser: adminUser
            }
        })
        await product_model.insertMany(sampledata);
        console.log("Data send successfully..!!");
        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

const destroyDataToDatabase = async() => {
    try {
        await user_model.deleteMany();
        await product_model.deleteMany();
        await order_model.deleteMany();
        await product_model.deleteMany();
        console.log("Data destroy successfully..!!");
        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

if (process.argv[2] === '-d') {
    destroyDataToDatabase();
} else {
    sendDataToDatabase();
}