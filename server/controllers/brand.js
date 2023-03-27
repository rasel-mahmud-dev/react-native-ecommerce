const formidable = require('formidable');
const fileUpload = require("../utils/fileUpload");
const Brand = require("../models/Brand");


exports.getBrands = async (req, res, next) => {
    try {
        let brands = await Brand.find({})
        res.status(200).json({
            brands: brands
        })

    } catch (ex) {

        next(ex)
    }
}

exports.addBrand = async (req, res, next) => {

    const form = formidable({multiples: true});

    form.parse(req, async (err, fields, files) => {
        if (err) {
            next(err)
            return;
        }
        const {name} = fields
        try {

            let newBrand = {
                name,
                images: "",
            }

            if (files.image) {
                const {filepath} = files.image
                let url = await fileUpload(filepath)
                if (url) {
                    newBrand.image = url
                }
            }

            let result = await Brand.updateOne({
                name: newBrand.name
            }, {
                $set: newBrand
            }, {
                upsert: true,
                new: true
            })


            if(result.upsertedCount || result.matchedCount || result.modifiedCount){
                res.status(201).json(newBrand)
            } else{
                next("Brand Adding fail")
            }

            // newBrandInstance = await newBrandInstance.save()
            // if (!newBrandInstance) {
            //     return next("Brand Adding fail")
            // }
            // res.status(201).json(newBrandInstance)

        } catch (ex) {
            next(ex)
        }
    });


}