const mongoose = require("mongoose")

const Category = mongoose.model("Category", new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
        index: true
    },
    description: String,
    image: String,
    brandIds: []
}))


module.exports = Category