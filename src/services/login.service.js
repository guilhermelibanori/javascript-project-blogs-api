const { User } = require('../models');
const { generateToken } = require('../utils/generateToken');

const doLogin = async (email, password) => {
  const user = await User.findOne({
    where: {
      email,
      password,
    },
  });
    if (!user) {
    return { status: 'BAD_REQUEST', data: { message: 'Invalid fields' } };
  }
  const token = generateToken(user);
  return { status: 'SUCCESSFUL', data: { token } };
};

module.exports = {
doLogin,
};