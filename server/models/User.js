const mongoose = require("mongoose")

const User = mongoose.model("User", new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        index: true,
        unique: true
    },
    avatar: String,
    password: String,
    role: {
        type: String,
        enum: ['ADMIN', 'CUSTOMER', 'SELLER'],
        default: "CUSTOMER"
    }
}))


module.exports =  User