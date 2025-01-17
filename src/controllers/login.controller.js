const { loginService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const doLogin = async (req, res) => {
  const { email, password } = req.body;
  const { status, data } = await loginService.doLogin(email, password);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  doLogin,
};