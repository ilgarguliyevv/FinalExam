const Food = require("../models/foodModels.js")

const getAllFood = async (req,res) => {
    try {
        const getAll = await Food.find({})
        res.send(getAll)
    } catch (error) {
        res.send(error)
    }
}
const getFoodById = async (req,res) => {
    try {
        const {id} = req.params
        const getById = await Food.findById({_id:id})
        res.send(getById)
    } catch (error) {
        res.send(error)
    }
}

const deleteFood = async (req,res) => {
    try {
        const {id} = req.params
        const deletedFood = await Food.findOneAndDelete({_id:id})
        res.send(deletedFood)
    } catch (error) {
        res.send(error)
    }
}

const postFood = async (req,res) => {
    try {
     const obj = req.body
     const newFood = await new Food(obj)
     newFood.save()
     res.send(newFood)
    } catch (error) {
        res.send(error)
    }
}

const patchFood = async (req,res) => {
    try {
        const {id} = req.params
        const editedFood = await Food.findOneAndUptade({_id:id})
        res.send(editedFood)
    } catch (error) {
        res.send(error)
    }
}

module.exports= {getAllFood, getFoodById,deleteFood, postFood, patchFood}