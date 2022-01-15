const express = require('express');
const path = require('path');
//const products = require('./products');
const dotenv = require('dotenv');
const connectDB = require('./database/connect');
const PORT = 8000;
const productRoute = require('./router/productRoute');
const userRoute = require('./router/userRoute');
const userProfileRoute = require('./router/userProfileRoute')
const userRegisterRoute = require('./router/userRegisterRoute');
const useOrder = require('./router/orderRoute');
//const update = require('./router/updateUserProfileRoute')

//Confidential data hide using .env
dotenv.config();
const app = express();
connectDB();
app.use(express.json());
//for production using heroku
if (process.env.NODE_ENV === "Production") {
    app.use(express.static(path.join(__dirname, "../frontend/build")))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
    });
} else {
    app.get("/", (req, res) => {
        res.send("hello from the server")
    });
}
app.use('/api/user', useOrder);
app.use('/api/user', userRoute);
app.use('/api/user', userProfileRoute);
app.use('/api', productRoute);
app.use('/api', userRegisterRoute);




// app.get('/products/:id', (req, res) => {
//     const product = products.find((p) => p.id == req.params.id);
//     res.json(product);

// });
app.listen(process.env.PORT || PORT, () => {
    console.log(`SERVER IS ON ${process.env.NODE_ENV} MODE ON THE PORT NUMBER ${PORT}`);
})