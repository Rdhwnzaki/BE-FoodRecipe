const { resp, response } = require("../middleware/common");
const cloudinary = require("../config/photo");
const modelRecipe = require("../model/recipe");

const Port = process.env.PORT;
const Host = process.env.HOST;

const recipeController = {
  addRecipe: async (req, res) => {
    try {
      const image = await cloudinary.uploader.upload(req.file.path, {
        folder: "food",
      });
      req.body.photo = image.url;
      // req.body.video = image.url;
      await modelRecipe.insertRecipe(req.body);
      return response(res, 200, true, req.body, "Insert Recipe Success");
    } catch (err) {
      console.log(err);
      return response(res, 404, false, err, "Insert Recipe Fail");
    }
  },
  getRecipe: (req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 6;
    const sort = req.query.sort || "asc";
    const sortby = req.query.sortby || "id_recipe";
    const search = req.query.search || "";
    modelRecipe
      .selectDataRecipe(page, limit, sort, sortby, search)
      .then((result) =>
        response(res, 200, true, result.rows, "Get recipe success")
      )
      .catch((err) => response(res, 404, false, err, "Get recipe failed"));
  },
  getDetailRecipe: (req, res, next) => {
    modelRecipe
      .selectDataRecipebyId(req.params.id_recipe)
      .then((result) =>
        response(res, 200, true, result.rows, "Get detail recipe success")
      )
      .catch((err) => response(res, 404, false, err, "get detail recipe fail"));
  },
};
exports.recipeController = recipeController;
