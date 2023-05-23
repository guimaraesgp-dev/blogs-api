const express = require('express');
const { createCategory, getAllCategories } = require('../controllers/categories.controller');
const { validateCategory, validateToken } = require('../middlewares');

const router = express.Router();

router.post('/', validateToken, validateCategory, createCategory);
router.get('/', validateToken, getAllCategories);

module.exports = router;