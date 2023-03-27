const mongoose = require("mongoose")

const Product = mongoose.model("Product", new mongoose.Schema({
    slug: {
        type: String,
        required: true,
        index: true
    },
    title: {
        type: String,
        required: true,
        index: true,
    },
    price: {
        type: Number,
        required: true
    },
    description: String,
    thumb: String,
    images: [],
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    brandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand",
        index: true,
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        index: true,
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