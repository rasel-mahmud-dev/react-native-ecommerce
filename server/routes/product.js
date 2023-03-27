
const express = require("express");

const {addProduct, getProducts, filterProducts} = require("../controllers/product");
const auth = require("../middlwares/auth");


const router = express.Router()


router.get("/api/products", getProducts)
router.post("/api/products", auth, addProduct)
router.post("/api/products/filter", filterProducts)



module.exports = router