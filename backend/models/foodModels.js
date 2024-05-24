const mongoose = require("mongoose")

const foodSchema = mongoose.Schema({
    image:String,
    name: String,
    description: String,
    price: Number,
})

module.exports = mongoose.model("Food", foodSchema)