const express = require("express");
const auth = require("../middlwares/auth");
const {addBrand, getBrands} = require("../controllers/brand");


const router = express.Router()


router.get("/api/brands", getBrands)
router.post("/api/brands", auth, addBrand)



module.exports = router