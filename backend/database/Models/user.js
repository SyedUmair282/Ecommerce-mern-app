const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const validator = require('validator')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Invalid Inputs"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is Invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        unique: [true, "Invalid Inputs"]
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
})
userSchema.methods.matchPassword = async function(enterPassword) {
    return await bcryptjs.compare(enterPassword, this.password);
}
userSchema.pre("save", async function(next) {
    // if (!this.isModified('password')) {
    //     next();
    // }
    this.password = await bcryptjs.hashSync(this.password, 10)
})


const User = new mongoose.model('User', userSchema);

module.exports = User;