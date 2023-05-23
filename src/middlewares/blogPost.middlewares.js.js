const Joi = require('joi');

const postValidation = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().min(1).required(),
});

const validateBlogPost = (req, res, next) => {
  const { error } = postValidation.validate(req.body);
  if (error) { return res.status(400).json({ message: 'Some required fields are missing' }); }
  return next();
};

module.exports = {
  validateBlogPost,
};