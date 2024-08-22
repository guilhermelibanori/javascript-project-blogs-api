const { Category } = require('../models');

const createCategory = async (name) => {
  const [category, created] = await Category.findOrCreate({ 
    where: {
      name,
    },
    defaults: {
      name,
    },
  });
    if (!created) {
    return { status: 'CREATED', data: category };
  }
  return { status: 'CREATED', data: category };
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return { status: 'SUCCESSFUL', data: categories };
};

const getCategoryById = async (id) => {
  const category = await Category.findByPk(id);
  if (!category) {
    return { status: 'NOT_FOUND', data: { message: 'Not Found' } };
  }
  return { status: 'SUCCESSFUL', data: category };
};

module.exports = {
createCategory,
getAllCategories,
getCategoryById,
};