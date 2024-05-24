const express = require("express")
const mongoose = require("mongoose") 

const MONGO_URI = process.env.MONGO_URI
const app = express()

mongoose
	.connect(MONGO_URI)
	.then(() => {
		app.listen(5000, () => {
			console.log("Connect DB")
		})
	})

    module.exports=app