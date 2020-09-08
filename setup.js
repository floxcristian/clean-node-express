// const db = require();
const inquirer = require('inquirer');
const chalk = require('chalk');
//const argv = require('yargs').argv;
const argv = require('yargs').boolean('y').argv;

const prompt = inquirer.createPromptModule();

const handleFatalError = (e) => {
  console.error(`${chalk.red('[Fatal Error]')} ${e.message}`);
  console.error(e.stack);
  process.exit(1);
};

const setup = async () => {
  //if (process.argv[2] !== '-y') {
  if (!argv.y) {
    const answer = await prompt({
      type: 'confirm',
      name: 'setup',
      message: 'This will destroy your database, are you sure?'
    });

    if (!answer.setup) return console.log('Nothing happened');
  } else {
    console.log('direecto');
  }

  const config = {
    database: process.env.DB_NAME || 'db_test',
    username: process.env.DB_USER || 'user_test',
    password: process.env.DB_PASS || '',
    host: process.env.DB_HOST || 'localhost'
  };
  //await db(config).catch(handleFatalError);
  console.log('Success!');
  process.exit(0);
};

setup();
