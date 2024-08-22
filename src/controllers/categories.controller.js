const { categoriesService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const { status, data } = await categoriesService.createCategory(name);
  return res.status(mapStatusHTTP(status)).json(data);
};

const getAllCategories = async (req, res) => {
  const { status, data } = await categoriesService.getAllCategories();
   res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  createCategory,
  getAllCategories,
};