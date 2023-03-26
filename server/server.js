const express = require("express")
const morgan = require("morgan")
const app = express()

require("dotenv").config()

app.use(express.json())
app.use(morgan("dev"))

app.use(express.static("static"))
app.use(express.json())

const mongoose = require("mongoose");
const routes = require("./routes");

app.use(routes)


app.get("/", (req, res) => {
    res.send("hi")
})


app.use((err, req, res, next) => {
    let status = err.status || 500

    let message = "Internal Error"
    if (typeof err === "string") {
        message = err
    } else if (typeof err?.message === "string") {
        message = err.message
    }

    return res.status(500).send({message})
})


const PORT = process.env.PORT || 9000

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("mongodb connected")
}).catch((ex) => {
    console.log(ex, "sdfkj")
})

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))