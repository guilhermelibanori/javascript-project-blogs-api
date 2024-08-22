const { User } = require('../models');
const { generateToken } = require('../utils/generateToken');

const insertUser = async (displayName, email, password, image) => {
  const [user, created] = await User.findOrCreate({ 
    where: {
      email,
    },
    defaults: {
      displayName,
      email,
      password,
      image,
    },
  });
    if (!created) {
    return { status: 'CONFLICT', data: { message: 'User already registered' } };
  }
  const token = generateToken(user);
  return { status: 'CREATED', data: { token } };
};

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  return { status: 'SUCCESSFUL', data: users };
};

const findUser = async (id) => {
  const user = await User.findByPk(id, {
    attributes: {
      exclude: ['password'],
    },
  });
  if (!user) {
    return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };
  }
  return { status: 'SUCCESSFUL', data: user };
};

module.exports = {
insertUser,
getAllUsers,
findUser,
};