const {
  add,
  read,
  update,
  deletee,
  readOne,
} = require("../service/recipe.service");

const readRecipe = async (req, res) => {
  const resp = await read();
  return res.status(200).json(resp);
};

const readSingleRecipe = async (req, res) => {
  const resp = await readOne(req.params.id);
  return res.status(200).json(resp);
};

const addRecipe = async (req, res) => {
  const data = req.body;
  const resp = await add({ ...data, file: req.file });
  return res.status(200).json(resp);
};

const updateRecipe = async (req, res) => {
  const data = req.body;
  const id = req.params;
  const resp = await update(id, { ...data, file: req.file });
  return res.status(200).json(resp);
};

const deleteRecipe = async (req, res) => {
  const id = req.params;
  const resp = await deletee(id);
  return res.status(201).json(resp);
};

module.exports = {
  addRecipe,
  readRecipe,
  updateRecipe,
  deleteRecipe,
  readSingleRecipe,
};
