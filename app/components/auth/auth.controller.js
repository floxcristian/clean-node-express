const authDb = require('./');

const login = async (req, res, next) => {
  try {
    const { params } = req;
  } catch (err) {
    next(err);
  }
};

const register = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
  register
};
