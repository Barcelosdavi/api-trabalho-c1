const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rotas Públicas (Qualquer pessoa pode aceder)
router.post('/registrar', authController.registrar);
router.post('/login', authController.login);

// Rota Protegida (Exige o Token JWT para aceder)
router.get('/perfil', authMiddleware, (req, res) => {
  res.json({ 
    mensagem: 'Conseguiste aceder a uma rota protegida por autenticação!', 
    usuarioId: req.usuarioId 
  });
});

module.exports = router;