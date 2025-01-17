const mapStatusHTTP = require('../utils/mapStatusHTTP');

const validField = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({ 
      message: 'Some required fields are missing' });
  }
  next();
};

module.exports = {
  validField,
};