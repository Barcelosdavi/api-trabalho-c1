const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ erro: 'Acesso negado. Token não fornecido.' });

  try {
    const decodificado = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
    req.usuarioId = decodificado.id;
    next();
  } catch (error) {
    res.status(400).json({ erro: 'Token inválido.' });
  }
};