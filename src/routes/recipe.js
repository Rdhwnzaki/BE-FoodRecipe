const express = require("express");

const router = express.Router();
const { recipeController } = require("../controller/recipe");
const upload = require("../middleware/upload-video");
const { protect } = require("../middleware/auth");

router
  .post("/add-recipe", protect, upload, recipeController.addRecipe)
  .get("/", recipeController.getRecipe)
  .get(`/recipe-user`, protect, recipeController.getRecipeUser)
  .get("/:id_recipe", recipeController.getDetailRecipe)
  .delete("/delete-recipe/:id_recipe", protect, recipeController.deleteRecipe)
  .post("/add-comment/:id_recipe", protect, recipeController.addComment)
  .get("/comment/:id_recipe", recipeController.getComment)
  .post("/saved-recipe/post-saved/", protect, recipeController.addSaveRecipe)
  .get("/saved-recipe/get-saved", protect, recipeController.getSaved)
  .put("/edit-recipe/:id_recipe", upload, recipeController.editRecipe)
  .delete(
    "/saved-recipe/delete/:id_saved",
    protect,
    recipeController.deleteSaved
  )
  .post("/like-recipe/post-like", protect, recipeController.postLike)
  .get("/like-recipe/get-like", protect, recipeController.getLike)
  .delete("/like-recipe/delete/:id_liked", protect, recipeController.deleteLike)
  .get("/search/search-recipe", recipeController.sort);

module.exports = router;
