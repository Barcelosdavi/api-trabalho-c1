const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

exports.registrar = async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    // Prática de Segurança: Encriptar a palavra-passe antes de guardar
    const salt = await bcrypt.genSalt(10);
    const senhaCriptografada = await bcrypt.hash(senha, salt);

    const usuario = await prisma.user.create({
      data: { nome, email, senha: senhaCriptografada },
    });
    res.status(201).json({ mensagem: 'Utilizador criado com sucesso!', id: usuario.id });
  } catch (error) {
    res.status(400).json({ erro: 'Erro ao criar utilizador. O email já deve estar em uso.' });
  }
};

exports.login = async (req, res) => {
  const { email, senha } = req.body;
  try {
    const usuario = await prisma.user.findUnique({ where: { email } });
    if (!usuario) return res.status(400).json({ erro: 'Email ou palavra-passe incorretos.' });

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) return res.status(400).json({ erro: 'Email ou palavra-passe incorretos.' });

    // Prática de Segurança: Gerar Token JWT
    const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: '2h' });
    res.json({ token, mensagem: 'Login bem-sucedido!' });
  } catch (error) {
    res.status(500).json({ erro: 'Erro interno no servidor.' });
  }
};