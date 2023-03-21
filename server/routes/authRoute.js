
const express = require("express");
const {login, register, verifyAuth} = require("../controllers/auth");


const router = express.Router()


router.get("/api/auth/verify", verifyAuth)
router.post("/api/auth/login", login)
router.post("/api/auth/registration", register)



module.exports = router