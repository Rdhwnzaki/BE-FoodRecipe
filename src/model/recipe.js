const Pool = require("../config/db");

const insertRecipe = (data) => {
  const { title, ingredients, photo } = data;
  return Pool.query(
    `INSERT INTO recipe(title, ingredients, photo)VALUES('${title}','${ingredients}','${photo}')`
  );
};
module.exports = { insertRecipe };
