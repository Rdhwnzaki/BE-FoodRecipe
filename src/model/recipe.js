const Pool = require("../config/db");

const insertRecipe = (user_id, data) => {
  const { title, ingredients, photo, video } = data;
  return Pool.query(
    `INSERT INTO recipe(title, ingredients, photo, video,user_id)VALUES('${title}','${ingredients}','${photo}','${video}','${user_id}')`
  );
};

const selectDataRecipe = (page, limit, sort, sortby, search) =>
  new Promise((resolve, reject) => {
    const offset = (page - 1) * limit;
    Pool.query(
      `select * FROM recipe where (title) ilike '%${search}%' order by ${sortby} ${sort} limit ${limit} offset ${offset} `,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });

const selectDataRecipebyId = (id_recipe) =>
  new Promise((resolve, reject) => {
    Pool.query(
      `SELECT recipe.id_recipe,recipe.title,recipe.ingredients,recipe.photo,recipe.video,recipe.user_id,users.fullname_user FROM recipe INNER JOIN users ON recipe.user_id=users.id_user WHERE recipe.id_recipe = '${id_recipe}' `,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });

const insertComment = (data) => {
  const { comment_text, user_id, recipe_id } = data;
  new Promise((resolve, reject) => {
    Pool.query(
      `INSERT INTO comment(comment_text,user_id,recipe_id)VALUES('${comment_text}','${user_id}',${recipe_id})`,
      (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }
    );
  });
};

const getRecipeByUser = (user_id) => {
  return Pool.query(`SELECT * FROM recipe WHERE user_id = '${user_id}'`);
};

const getComents = (id_recipe) => {
  return new Promise((resolve, reject) => {
    Pool.query(
      `SELECT comment.id_comment,comment.comment_text,comment.user_id,comment.recipe_id,users.fullname_user,users.photo FROM comment INNER JOIN users ON comment.user_id=users.id_user WHERE comment.recipe_id=${id_recipe}`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    );
  });
};

const saveRecipes = ({ recipe_id }, user_id) => {
  return new Promise((resolve, reject) => {
    Pool.query(
      `INSERT INTO saved_recipe(user_id,recipe_id) VALUES ('${user_id}',${recipe_id})`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    );
  });
};

const postLikeRecipe = ({ recipe_id }, user_id) => {
  return new Promise((resolve, reject) => {
    Pool.query(
      `INSERT INTO liked_recipe(user_id,recipe_id)VALUES('${user_id}',${recipe_id})`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    );
  });
};

const getSavedRecipe = (user_id) => {
  return new Promise((resolve, reject) => {
    Pool.query(
      `SELECT saved_recipe.id_saved,saved_recipe.user_id,saved_recipe.recipe_id,recipe.title,recipe.photo FROM saved_recipe INNER JOIN recipe ON saved_recipe.recipe_id=recipe.id_recipe WHERE saved_recipe.user_id='${user_id}'`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    );
  });
};

const getLikeRecipe = (user_id) => {
  return new Promise((resolve, reject) => {
    Pool.query(
      `SELECT liked_recipe.id_liked,liked_recipe.user_id,liked_recipe.recipe_id,recipe.title,recipe.photo FROM liked_recipe INNER JOIN recipe ON liked_recipe.recipe_id=recipe.id_recipe WHERE liked_recipe.user_id='${user_id}'`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    );
  });
};

const deleteSavedRecipe = (user_id, id_saved) => {
  return new Promise((resolve, reject) => {
    Pool.query(
      `DELETE FROM saved_recipe WHERE id_saved=${id_saved} AND user_id='${user_id}'`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    );
  });
};

const deleteLikeRecipe = (user_id, id_liked) => {
  return new Promise((resolve, reject) => {
    Pool.query(
      `DELETE FROM liked_recipe WHERE id_liked=${id_liked} AND user_id='${user_id}'`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    );
  });
};

const editRecipes = (id_recipe, { title, ingredients, photo, video }) => {
  return new Promise((resolve, reject) => {
    Pool.query(
      `UPDATE recipe SET title='${title}',ingredients='${ingredients}',photo='${photo}',video='${video}' WHERE id_recipe=${id_recipe}`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    );
  });
};

const deleteRecipes = (user_id, id_recipe) => {
  return new Promise((resolve, reject) => {
    Pool.query(
      `DELETE FROM recipe WHERE id_recipe=${id_recipe} AND user_id='${user_id}'`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    );
  });
};

const sort = ({ limit, offset, sort, sortby, search }) => {
  console.log(limit, offset, sort, sortby);
  return Pool.query(
    `SELECT * FROM recipe WHERE (title) ILIKE ('%${search}%') 
    ORDER BY recipe.${sortby} ${sort} LIMIT ${limit} OFFSET ${offset} `
  );
};

module.exports = {
  insertRecipe,
  selectDataRecipe,
  selectDataRecipebyId,
  insertComment,
  getRecipeByUser,
  getComents,
  saveRecipes,
  getSavedRecipe,
  deleteSavedRecipe,
  postLikeRecipe,
  getLikeRecipe,
  deleteLikeRecipe,
  editRecipes,
  deleteRecipes,
  sort,
};
