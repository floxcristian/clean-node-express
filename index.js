'use strict';

const express = require('express');
const cors = require('cors');
//const routes =
const { PORT, CORS } = require('./app/config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: CORS }));

app.use(routes);

//const server = app.listen(3000);

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
