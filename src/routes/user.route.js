const route = require('express').Router();
const { userController } = require('../controllers');
const { userMiddleware, validateJWT } = require('../middlewares');

route.get('/', validateJWT.validate, userController.getAllUsers);
route.get('/:id', validateJWT.validate, userController.findUser);
route.post(
'/', 
userMiddleware.validDisplayName,
userMiddleware.validEmail,
userMiddleware.validPassword,
userController.createUser,
);

module.exports = route;