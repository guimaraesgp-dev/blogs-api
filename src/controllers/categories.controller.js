const categoryService = require('../services/categories.service');

const createCategory = async (req, res) => {
  const category = await categoryService.createCategory(req.body);
  if (category) { return res.status(201).json(category); }
  res.status(409).json({ message: 'Category already registered' });
};

const getAllCategories = async (req, res) => {
  const categories = await categoryService.getAllCategories();
  return res.status(200).json(categories);
};

module.exports = {
  createCategory,
  getAllCategories,
};