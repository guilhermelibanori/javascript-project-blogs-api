const { postService } = require('../services');
const { verifyToken } = require('../utils/generateToken');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { authorization } = req.headers;
  const getUserData = verifyToken(authorization.split(' ')[1]);
  const { payload } = getUserData;
  const { status, data } = await postService.createPost(title, content, categoryIds, payload.id);
  return res.status(mapStatusHTTP(status)).json(data);
};

const getAllPosts = async (req, res) => {
  const { status, data } = await postService.getAllPosts();
   res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  createPost,
  getAllPosts,
};