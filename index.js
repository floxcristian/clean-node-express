const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
// const routes = require('./app/routes');
const { PORT, CORS } = require('./app/config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: CORS }));

// app.use(routes);
// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// const server = app.listen(3000);

app.listen(PORT, (err) => {
  if (err) throw err;
  // console.log(`Listening on PORT: ${PORT}`);
  console.log(
    `%s App is running at http://localhost:%d in %s mode`,
    chalk.green('g'),
    app.get('port'),
    app.get('env')
  );
});

(async () => {
  try {
    //await server.start()
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
