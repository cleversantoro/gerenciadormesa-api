const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'mesa1234';

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Verifica se o header existe e começa com 'Bearer '
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, secret);
    req.usuario = payload; // payload: { id, nome }
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido ou expirado' });
  }
};
