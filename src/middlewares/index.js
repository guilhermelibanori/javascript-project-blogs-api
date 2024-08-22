const loginMiddleware = require('./login.middleware');
const userMiddleware = require('./user.middleware');
const categoriesMiddleware = require('./categories.middleware');
const postMiddleware = require('./post.middleware');
const validateJWT = require('./validateJWT');

module.exports = {
  loginMiddleware,
  userMiddleware,
  categoriesMiddleware,
  postMiddleware,
  validateJWT,
};