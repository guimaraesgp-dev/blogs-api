const blogPostService = require('../services/blogPost.service');

const createBlogPost = async (req, res) => {
  const post = req.body;
  const { id } = req.user;
  const newPost = await blogPostService.createBlogPost(post, id);
  if (newPost.type) {
    return res.status(newPost.type).json({ message: newPost.message });
  }
  res.status(201).json(newPost);
};

module.exports = {
  createBlogPost,
};