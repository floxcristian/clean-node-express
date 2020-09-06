const express = require('express');

const router = express.Router();

const {} = require('./user.controller');

router.get('/users').get('/users/:userId');

module.exports = router;
