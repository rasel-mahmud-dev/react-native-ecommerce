const express = require("express");
const auth = require("../middlwares/auth");
const {getCategories, addCategory} = require("../controllers/category");


const router = express.Router()


router.get("/api/categories", getCategories)
router.post("/api/categories", auth, addCategory)



module.exports = router