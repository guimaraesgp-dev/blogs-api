const Joi = require('joi');

const userValidation = Joi.object().keys({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

const validateUser = (req, res, next) => {
  const { error } = userValidation.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  return next();
};

module.exports = {
  validateUser,
};