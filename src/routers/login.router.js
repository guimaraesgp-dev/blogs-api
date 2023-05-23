const express = require('express');
const { validateLogin } = require('../middlewares');
const { getLogin } = require('../controllers/user.controller');

const router = express.Router();

router.post('/', validateLogin, getLogin);

module.exports = router;