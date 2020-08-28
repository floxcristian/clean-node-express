'use strict';

const express = require('express');
const cors = require('cors');
const { PORT, CORS } = require('./app/config');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: CORS }));

app.use(_routes);

//const server = app.listen(3000);

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
