const mongoose = require("mongoose")

const Category = mongoose.model("Category", new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category"
    },
    description: String,
    image: String,
    brandIds: []
}))


module.exports = Category