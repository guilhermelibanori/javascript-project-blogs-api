const { verifyToken } = require('../utils/generateToken');

const validate = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    if (authorization.split(' ')[0] === 'Bearer') {
      const payload = verifyToken(authorization.split(' ')[1]);
      req.payload = payload;
      return next();
    }  
    const payload = verifyToken(authorization);
    req.payload = payload;
    return next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validate,
};