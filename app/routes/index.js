const express = require('express');

const app = express();

app
  .use('/auth', require('./auth'))
  .use('/users', require('./user'))
  .use('/status', require('./status'));

module.exports = app;
