const express = require("express");

const router = express.Router();
const userRoutes = require("./users");
const recipeRoutes = require("./recipe");

router.use("/users", userRoutes);
router.use("/recipe", recipeRoutes);
module.exports = router;
