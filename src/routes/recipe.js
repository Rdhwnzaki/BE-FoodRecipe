const express = require("express");

const router = express.Router();
const { recipeController } = require("../controller/recipe");
const upload = require("../middleware/upload");
// const videoUpload = require("../middleware/uploadVideo");

router.post("/add-recipe", upload.single("photo"), recipeController.addRecipe);

module.exports = router;
