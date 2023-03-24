const mongoose = require("mongoose")

const Product = mongoose.model("Product", new mongoose.Schema({
    slug: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: String,
    image: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    stock: {
        type: Number,
        default: 1
    },
    new: {
        type: Boolean,
        default: true
    }
}))


module.exports = Product