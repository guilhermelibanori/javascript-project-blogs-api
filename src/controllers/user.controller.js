const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { status, data } = await userService.insertUser(displayName, email, password, image);
   res.status(mapStatusHTTP(status)).json(data);
};

const getAllUsers = async (req, res) => {
  const { status, data } = await userService.getAllUsers();
   res.status(mapStatusHTTP(status)).json(data);
};

const findUser = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await userService.findUser(id);
   res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
 createUser,
 getAllUsers,
 findUser,
};