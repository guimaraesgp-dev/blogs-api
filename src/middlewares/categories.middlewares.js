const Joi = require('joi');

const categoryValidation = Joi.object({
    name: Joi.string().required(),
  });

const validateCategory = (req, res, next) => {
  const { error } = categoryValidation.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  return next();
};

module.exports = {
  validateCategory,
};