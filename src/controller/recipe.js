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
      await modelRecipe.insertRecipe(req.body);
      return response(res, 200, true, req.body, "Insert Photo Success");
    } catch (err) {
      console.log(err);
      return response(res, 404, false, err, "Insert Photo Fail");
    }
  },
};
exports.recipeController = recipeController;
