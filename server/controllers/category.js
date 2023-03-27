const Product = require("../models/Product");
const slugify = require("slugify");

const formidable = require('formidable');
const fileUpload = require("../utils/fileUpload");
const Category = require("../models/Category");
const Brand = require("../models/Brand");


exports.getCategories = async (req, res, next) => {
    try {
        let categories = await Category.find({})
        res.status(200).json({
            categories: categories
        })

    } catch (ex) {

        next(ex)
    }
}

exports.addCategory = async (req, res, next) => {

    const form = formidable({ multiples: true });

    form.parse(req, async (err, fields, files) => {
        if (err) {
            next(err)
            return;
        }
        const {name, parentId, description = "", brandIds = ""} = fields

        try {

            let parentObjectId = ""
            if(!parentId  || parentId === "null"){
                 parentObjectId = "000000000000000000000000"
            } else{
                parentObjectId = parentId

            }

            let newCategory = {
                name,
                parentId: parentObjectId,
                description,
                images: "",
                brandIds: []
            }

            if(files.image){
                const {filepath} = files.image
                let url = await fileUpload(filepath)
                if(url){
                    newCategory.image = url
                }
            }


            try {
                let brandIdsArray = JSON.parse(brandIds)
                if(brandIdsArray && Array.isArray(brandIdsArray)){
                    newCategory.brandIds = brandIdsArray
                }
            } catch (ex){}

            let result = await Category.updateOne({
                name: newCategory.name
            }, {
                $set: newCategory
            }, {
                upsert: true,
                new: true
            })


            if(result.upsertedCount || result.matchedCount || result.modifiedCount){
                res.status(201).json(newCategory)
            } else{
                next("Category Adding fail")
            }

        } catch (ex) {
            next(ex)
        }
    });




}