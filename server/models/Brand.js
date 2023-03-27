const mongoose = require("mongoose")

const Brand = mongoose.model("Brand", new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    image: String
}))


module.exports = Brand