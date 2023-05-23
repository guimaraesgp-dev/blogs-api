const { validateLogin } = require('./login.middlewares');
const { validateUser } = require('./user.middlewares');

module.exports = {
  validateLogin,
  validateUser,
};