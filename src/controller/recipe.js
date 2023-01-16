const { response } = require("../middleware/common");
const modelRecipe = require("../model/recipe");

const recipeController = {
  addRecipe: async (req, res) => {
    try {
      // const image = await cloudinary.uploader.upload(req.file.path, {
      //   folder: "food",
      // });
      const user_id = req.payload.id_user;
      console.log("id_user", user_id);
      const {
        photo: [photo],
        video: [video],
      } = req.files;
      // const uri = `http://${Host}:${Port}/img/${photo.filename}`;
      // const uriVid = `http://${Host}:${Port}/vid/${video.filename}`;
      req.body.photo = photo.path;
      req.body.video = video.path;
      await modelRecipe.insertRecipe(user_id, req.body);
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
  addComment: async (req, res) => {
    try {
      const user_id = req.payload.id_user;
      console.log(user_id);
      const recipe_id = req.params.id_recipe;
      const data = {
        user_id,
        recipe_id,
        comment_text: req.body.comment_text,
      };
      await modelRecipe.insertComment(data);
      response(res, 200, true, data, "Insert Comment Success");
    } catch (err) {
      console.log(err);
      response(res, 404, false, err, "Insert Comment Failed");
    }
  },
  getRecipeUser: async (req, res) => {
    try {
      const user_id = req.payload.id_user;
      console.log("id_user", user_id);
      const result = await modelRecipe.getRecipeByUser(user_id);
      response(res, 200, true, result.rows, "Success Get Recipe By user");
    } catch (err) {
      response(res, 400, false, err, "Get Recipe By User Failed");
    }
  },
  getComment: async (req, res) => {
    try {
      const result = await modelRecipe.getComents(req.params.id_recipe);
      response(res, 200, true, result.rows, "Get comment success");
    } catch (error) {
      console.log(err);
      response(res, 404, false, err, "Get comment fail");
    }
  },
  addSaveRecipe: async (req, res) => {
    try {
      const user_id = req.payload.id_user;
      const result = await modelRecipe.saveRecipes(req.body, user_id);

      response(res, 200, true, result.rows, "Post save recipe success");
    } catch (err) {
      console.log(err);
      response(res, 404, false, err, "Post save recipe fail");
    }
  },
  postLike: async (req, res) => {
    try {
      const user_id = req.payload.id_user;
      console.log(user_id);
      const result = await modelRecipe.postLikeRecipe(req.body, user_id);
      response(res, 200, true, result.rows, "Post like success");
    } catch (err) {
      console.log(err);
      response(res, 404, false, err, "Post like fail");
    }
  },
  getSaved: async (req, res) => {
    try {
      const user_id = req.payload.id_user;
      console.log(user_id);
      const result = await modelRecipe.getSavedRecipe(user_id);
      response(res, 200, true, result.rows, "Get saved recipe success");
    } catch (err) {
      console.log(err);
      response(res, 404, false, err, "Get saved recipe false");
    }
  },
  getLike: async (req, res) => {
    try {
      const user_id = req.payload.id_user;
      console.log(user_id);
      const result = await modelRecipe.getLikeRecipe(user_id);
      response(res, 200, true, result.rows, "Get like success");
    } catch (err) {
      console.log(err);
      response(res, 404, false, err, "Get like fail");
    }
  },
  deleteSaved: async (req, res) => {
    try {
      const user_id = req.payload.id_user;
      console.log(user_id);
      const result = await modelRecipe.deleteSavedRecipe(
        user_id,
        req.params.id_saved
      );
      response(res, 200, true, result.rows, "Delete save recipe success");
    } catch (err) {
      response(res, 404, false, err, "Delete saved recipe fail");
    }
  },
  deleteLike: async (req, res) => {
    try {
      const user_id = req.payload.id_user;
      console.log(user_id);
      const result = await modelRecipe.deleteLikeRecipe(
        user_id,
        req.params.id_liked
      );
      response(res, 200, true, result.rows, "Delete like success");
    } catch (err) {
      console.log(err);
      response(res, 404, false, err, "Delete like fail");
    }
  },
  editRecipe: async (req, res) => {
    try {
      const user_id = req.payload.id_user;
      console.log("id_user", user_id);
      const {
        photo: [photo],
        video: [video],
      } = req.files;
      console.log(req.files);
      const { title, ingredients } = req.body;
      req.body.photo = photo.path;
      req.body.video = video.path;
      const data = { title, ingredients, photo, video };
      await modelRecipe.editRecipes(req.params.id_recipe, data);
      return response(res, 200, true, req.body, "Update Recipe Success");
    } catch (err) {
      console.log(err);
      return response(res, 404, false, err, "Update Recipe Fail");
    }
  },
  deleteRecipe: async (req, res) => {
    try {
      const user_id = req.payload.id_user;
      console.log(user_id);
      const result = await modelRecipe.deleteRecipes(
        user_id,
        req.params.id_recipe
      );
      response(res, 200, true, result.rows, "Delete recipe success");
    } catch (err) {
      console.log(err);
      response(res, 404, false, err, "Delete recipe fail");
    }
  },
  sort: async (req, res, next) => {
    try {
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;
      const offset = (page - 1) * limit;
      const sortby = req.query.sortby || "title";
      const sort = req.query.sort || "asc";
      const search = req.query.search || "";
      const result = await modelRecipe.sort({
        limit,
        offset,
        sort,
        sortby,
        search,
      });
      response(res, 200, true, result.rows, "get data success");
    } catch (err) {
      console.log(err);
      response(res, 404, false, err, "get data fail");
    }
  },
};
exports.recipeController = recipeController;
