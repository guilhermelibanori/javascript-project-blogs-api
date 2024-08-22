const mapStatusHTTP = require('../utils/mapStatusHTTP');

const validName = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({ 
      message: '"name" is required' });
  }
  next();
};

module.exports = {
  validName,
};