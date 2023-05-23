const { validateLogin } = require('./login.middlewares');
const { validateUser } = require('./user.middlewares');
const { validateToken } = require('./tokenvalidation.middlewares');
const { validateCategory } = require('./categories.middlewares');

module.exports = {
  validateLogin,
  validateUser,
  validateToken,
  validateCategory,
};