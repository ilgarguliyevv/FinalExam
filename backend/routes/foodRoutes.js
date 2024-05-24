const express = require("express")
const router = express.Router()
const foodController = require("../controllers/foodControllers.js")

router.get("/food", foodController.getAllFood),
router.get("/food/:id", foodController.getFoodById),
router.delete("/food/:id", foodController.deleteFood),
router.post("/food", foodController.postFood),
router.patch("/food/:id", foodController.postFood),


module.exports = router