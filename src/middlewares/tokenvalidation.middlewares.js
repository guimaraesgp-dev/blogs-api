const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env || 'teste';

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const dataValues = jwt.verify(token, JWT_SECRET);
    req.user = dataValues;
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateToken,
};