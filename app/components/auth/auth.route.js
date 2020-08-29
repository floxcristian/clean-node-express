'use strict';

const express = require('express');
const router = express.Router();

const { login, register } = require('./auth.controller');

router
  .post('/login', validation.login, login)
  .post('/register', validation.login, register);

module.exports = router;
