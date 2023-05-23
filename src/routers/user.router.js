const express = require('express');
const { createUser, getAlluser, getUserById } = require('../controllers/user.controller');
const { validateUser, validateToken } = require('../middlewares');

const router = express.Router();

router.post('/', validateUser, createUser);
router.get('/', validateToken, getAlluser);
router.get('/:id', validateToken, getUserById);

module.exports = router;