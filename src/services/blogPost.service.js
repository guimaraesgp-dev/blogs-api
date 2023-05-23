const { BlogPost, Category, PostCategory, sequelize } = require('../models');

const categoryIdExist = async (categories) => {
  const { count } = await Category.findAndCountAll({
    where: { id: categories } });
  return (categories.length !== count);
};

const createBlogPost = async ({ title, content, categoryIds }, userId) => {
  const verifyId = await categoryIdExist(categoryIds);
  if (verifyId) {
    return { type: 400, message: 'one or more "categoryIds" not found' };
  }
  try {
    const result = await sequelize.transaction(async (t) => {
      const newPost = await BlogPost.create({ userId, title, content }, { transaction: t });
      await Promise.all(categoryIds.map(async (categoryId) => PostCategory
      .create({ postId: newPost.id, categoryId }, { transaction: t })));
      return newPost;
    });
    return result;
  } catch (e) {
    console.log(e);
    return e;
  } 
};

module.exports = {
  createBlogPost,
};