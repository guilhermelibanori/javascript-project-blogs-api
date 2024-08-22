const mapStatusHTTP = require('../utils/mapStatusHTTP');

const validDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({ 
      message: '"displayName" length must be at least 8 characters long' });
  }
  next();
};

const validEmail = (req, res, next) => {
  const { email } = req.body;
  const validateEmail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
  if (!email.match(validateEmail)) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({ 
      message: '"email" must be a valid email' });
  }
  next();
};

const validPassword = (req, res, next) => {
  const { password } = req.body;
  if (password.length < 6) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({ 
      message: '"password" length must be at least 6 characters long' });
  }
  next();
};

module.exports = {
  validDisplayName,
  validEmail,
  validPassword,
};