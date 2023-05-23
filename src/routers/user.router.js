const express = require('express');
const { createUser, getAlluser } = require('../controllers/user.controller');
const { validateUser, validateToken } = require('../middlewares');

const router = express.Router();

router.post('/', validateUser, createUser);
router.get('/', validateToken, getAlluser);

module.exports = router;