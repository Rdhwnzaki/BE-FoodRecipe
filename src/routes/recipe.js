const express = require("express");

const router = express.Router();
const { recipeController } = require("../controller/recipe");
const upload = require("../middleware/upload");

router
  .post("/add-recipe", upload.single("photo"), recipeController.addRecipe)
  // .post(
  //   "/add-recipe",
  //   [upload.array("photo", 1), upload.array("video", 1)],
  //   recipeController.addRecipe
  // )
  .get("/", recipeController.getRecipe)
  .get("/:id_recipe", recipeController.getDetailRecipe);

module.exports = router;
