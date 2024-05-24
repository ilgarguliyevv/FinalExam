const express = require("express")
const routes = require("./routes/foodRoutes.js")
require("dotenv").config()
const app = require("./config/db.js")
const cors = require("cors")

const bodyParser = require("body-parser")

const PORT = process.env.PORT


app.use(bodyParser.json())

app.use(cors())

app.use("/", routes)

app.listen(PORT, () => {
	console.log("Server has started!")
})