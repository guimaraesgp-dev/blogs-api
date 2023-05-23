const { Category } = require('../models');

const createCategory = async (category) => {
  const result = await Category.create(category);
  return result;
};

const getAllCategories = async () => Category.findAll();

module.exports = {
  createCategory,
  getAllCategories,
};