const pool = require('../../lib/postgres2');

const login = async (user, pass) => {
  try {
    const res = await pool.query(
      'SELECT name, username FROM USERS WHERE username = $1 AND password = $2',
      [user, pass]
    );
    if (res.rowCount <= 0) {
      throw 'login fail';
    } else return res;
  } catch (e) {}
};

module.exports = {
  login
};
