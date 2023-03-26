const mongoose = require("mongoose")

const User = mongoose.model("User", new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    avatar: String,
    password: String
}))


module.exports =  User