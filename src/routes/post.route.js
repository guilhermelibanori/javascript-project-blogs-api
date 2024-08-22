const route = require('express').Router();
const { postController } = require('../controllers');
const { validateJWT, postMiddleware } = require('../middlewares');

route.get('/', validateJWT.validate, postController.getAllPosts);
route.post(
'/', 
validateJWT.validate,
postMiddleware.validField,
postMiddleware.validCategory,
postController.createPost,
);

module.exports = route;