'use strict';

const express = require('express');
const cors = require('cors');
const { PORT } = require('./app/config');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: '*' }));

app.use(_routes); // como usar rutas separadas en distintos modulos?

//const server = app.listen(3000);

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
