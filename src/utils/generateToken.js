const jwt = require('jsonwebtoken');

const jwtConfig = { algorithm: 'HS256', expiresIn: '7d' };

function generateToken(user) {
  const { password, ...userWithoutPassword } = user.dataValues;
  const token = jwt.sign({ payload: userWithoutPassword }, process.env.JWT_SECRET, jwtConfig);

  return token;
}

function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}
module.exports = {
  generateToken,
  verifyToken,
};