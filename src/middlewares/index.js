const { validateLogin } = require('./login.middlewares');
const { validateUser } = require('./user.middlewares');
const { validateToken } = require('./tokenvalidation.middlewares');
const { validateCategory } = require('./categories.middlewares');
const { validateBlogPost } = require('./blogPost.middlewares.js');

module.exports = {
  validateLogin,
  validateUser,
  validateToken,
  validateCategory,
  validateBlogPost,
};