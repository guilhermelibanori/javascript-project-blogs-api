const route = require('express').Router();
const { categoriesController } = require('../controllers');
const { categoriesMiddleware, validateJWT } = require('../middlewares');

route.post(
'/', 
validateJWT.validate,
categoriesMiddleware.validName,
categoriesController.createCategory,
);

route.get('/', validateJWT.validate, categoriesController.getAllCategories);

module.exports = route;