const express = require('express');
const { createBlogPost } = require('../controllers/blogPost.controller');
const { validateBlogPost, validateToken } = require('../middlewares');

const router = express.Router();

router.post('/', validateToken, validateBlogPost, createBlogPost);

module.exports = router;