const { Pool } = require('pg');
const config = require('../config');

let postgres = null;

const pool = new Pool(config.pg);

(async () => {
  const { port, host, database } = config.pg;

  try {
    const text = `
      SELECT * 
      FROM pg_stat_activity 
      WHERE datname = $1`;
    const values = [database];
    const res = (await pool.query(text, values)).rows[0];
    console.log(`[SUCCESS] database is running on ${res.client_addr}:${port}`);
  } catch (err) {
    console.error(err.message);
    console.error(err.stack);
    process.exit(1);
  }
})();

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool
};

module.exports = (config) => {
  if (!posgres) postgres = new Pool(config);
  return postgres;
};
