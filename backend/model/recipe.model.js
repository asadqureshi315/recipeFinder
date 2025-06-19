const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    time: { type: String, required: true },
    serving: { type: String, required: true },
    difficulty: { type: String, required: true },
    description: { type: String, required: true },
    incredients: { type: Array, required: true },
    instructions: { type: Array, required: true },
    file: { type: String, required: true },
  },
  { timestamp: true }
);

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
