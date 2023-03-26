const jwt = require("jsonwebtoken");


async function auth(req, res, next){
    let token = req.headers["token"] || ""
    if(!token) return res.status(409).send("Please login first")

    try{

        let data = jwt.decode(token, process.env.JWT_SECRET)
        if(!data){
            return res.status(409).json({message: "Please login first"})
        }

        req.user = {
            _id: data._id,
            role: data.role
        }
        next()

    } catch(ex){
        return res.status(409).send("Please login first")
    }


}

module.exports = auth



