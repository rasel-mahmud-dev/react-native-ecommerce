
const express = require("express");

const authRoute = require("./authRoute")
const product = require("./product")


const router = express.Router()

router.use(authRoute)
router.use(product)

module.exports = router