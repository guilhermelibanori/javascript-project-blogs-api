const route = require('express').Router();
const { loginController } = require('../controllers');
const { loginMiddleware } = require('../middlewares');

route.post(
'/', 
loginMiddleware.validField,
loginController.doLogin,
);

module.exports = route;