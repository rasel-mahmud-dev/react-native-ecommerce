const Product = require("../models/Product");
const slugify = require("slugify");


exports.getProducts = async (req, res, next) => {
    try {
        let products = await Product.find({})
        res.status(200).json({
            products: products
        })

    } catch (ex) {
        next(ex)
    }
}

exports.addProduct = async (req, res, next) => {
    const {title, price, stock = 1, image = ""} = req.body


    try {

        let newProduct = new Product({
            title,
            slug: slugify(title, {trim: true}),
            price: Number(price),
            stock: Number(stock),
            userId: req.user._id,
            image
        })


        newProduct = await newProduct.save()
        if (!newProduct) {
            return next("Product Adding fail")
        }


        res.status(201).json(newProduct)

    } catch (ex) {
        next(ex)
    }
}