
const express = require("express");

const authRoute = require("./authRoute")
const product = require("./product")
const brand = require("./brandRoute")
const category = require("./categoryRoute")


const router = express.Router()

router.use(authRoute)
router.use(product)
router.use(brand)
router.use(category)


module.exports = router