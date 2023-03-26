
const express = require("express");

const {addProduct, getProducts} = require("../controllers/product");
const auth = require("../middlwares/auth");


const router = express.Router()


router.get("/api/products", getProducts)
router.post("/api/products", auth, addProduct)



module.exports = router