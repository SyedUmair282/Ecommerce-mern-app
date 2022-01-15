const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Connection Successfully to the port", connect.connection.name);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;