const Product = require("../models/Product");
const slugify = require("slugify");

const formidable = require('formidable');
const fileUpload = require("../utils/fileUpload");


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


    const form = formidable({ multiples: true });

        form.parse(req, async (err, fields, files) => {
            if (err) {
                next(err)
                return;
            }
            const {title, price, category, brand, stock = 1 } = fields
            try {
                console.log(req.user)

                let newProduct = {
                    title,
                    slug: slugify(title, {trim: true}),
                    price: Number(price),
                    categoryId: category,
                    brandId: brand,
                    sellerId: req.user._id,
                    thumb: "",
                    images: []
                }

                if(files.thumb){
                    const {filepath} = files.thumb
                    let url = await fileUpload(filepath)
                    if(url){
                        newProduct.thumb = url
                    }
                }


                let imagesPromises = []
                if(files.images && Array.isArray(files.images)){
                    files.images.forEach((img, index)=>{
                        imagesPromises.push(fileUpload(img.filepath))
                    })
                }

                let result = await Promise.allSettled(imagesPromises)

                result.forEach(item=>{
                    if(item.status === "fulfilled"){
                        newProduct.images.push(item.value)
                    }
                })

                let newProductInstance = new Product(newProduct)

                newProductInstance = await newProductInstance.save()
                if (!newProductInstance) {
                    return next("Product Adding fail")
                }
                res.status(201).json(newProductInstance)

            } catch (ex) {
                next(ex)
            }
        });




}



exports.filterProducts = async (req, res, next) => {
    const {title} = req.body
    try {
        let products = await Product.find({
            $or: [
                { title: { $regex: new RegExp(title, "gi") } }
            ]
        })

        res.status(200).json({
            products: products
        })

    } catch (ex) {

        next(ex)
    }
}
