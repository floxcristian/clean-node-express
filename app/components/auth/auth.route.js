const express = require('express');
const { login, register } = require('./auth.controller');

const router = express.Router();

router.post('/login', validation.login, login).post('/register', validation.login, register);

module.exports = router;
