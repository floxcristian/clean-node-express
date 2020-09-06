const getUsers = async (req, res, next) => {
  const {} = req.body;
  try {
    const users = await getUsers();
    if (users) {
      return res.status(200).json({});
    }
    return;
  } catch (err) {
    next(err);
  }
};

const createUser = async (req, res, next) => {
  try {
    const {} = req.body;

    const user = await createUser();
    return res.status(201).json();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser,
  getUsers
};
