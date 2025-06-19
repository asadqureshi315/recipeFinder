const upload = require("../config/upload");
const {
  addRecipe,
  readRecipe,
  updateRecipe,
  deleteRecipe,
  readSingleRecipe,
} = require("../controller/recipe.controller");

const Router = require("express").Router();

Router.route("/get").get(readRecipe);
Router.route("/get/:id").get(readSingleRecipe);
Router.route("/add").post(upload.single("photo"), addRecipe);
Router.route("/update").patch(upload.single("photo"), updateRecipe);
Router.route("/delete").delete(deleteRecipe);

module.exports = Router;
