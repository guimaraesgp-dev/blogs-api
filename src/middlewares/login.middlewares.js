const Joi = require('joi');

const loginValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const validateLogin = (req, res, next) => {
  const { error } = loginValidation.validate(req.body);
  if (error) return res.status(400).json({ message: 'Some required fields are missing' });
  return next();
};

module.exports = {
  validateLogin,
};