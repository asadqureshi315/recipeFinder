const Recipe = require("../model/recipe.model");

const read = async () => {
  try {
    const recipe = await Recipe.find();
    return recipe;
  } catch (error) {
    console.log(error);
  }
};

const readOne = async (id) => {
  try {
    const recipe = await Recipe.findById(id);
    return recipe;
  } catch (error) {
    console.log(error);
  }
};

const add = async (data) => {
  try {
    console.log(data);
    const incredients = JSON.parse(data.incredients);
    const instructions = JSON.parse(data.instructions);
    const recipe = await Recipe.create({
      ...data,
      incredients,
      instructions,
      file: data.file.path,
    });
    return recipe;
  } catch (error) {
    console.log(error);
  }
};

const update = async (id, data) => {
  try {
    console.log(data);
    const incredients = JSON.parse(data.incredients);
    const instructions = JSON.parse(data.instructions);
    const recipe = await Recipe.findByIdAndUpdate(id, {
      ...data,
      incredients,
      instructions,
      file: data.file.path,
    });
    return recipe;
  } catch (error) {
    console.log(error);
  }
};

const deletee = async (id) => {
  try {
    await Recipe.findByIdAndDelete(id);
    return true;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { add, read, update, deletee, readOne };
