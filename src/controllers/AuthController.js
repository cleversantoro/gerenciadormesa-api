
const { Atendente } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'mesa1234';

module.exports = {
  async login(req, res) {
    const { login, senha } = req.body;

    if (!login || !senha) {
      return res.status(400).json({ error: 'Login e senha obrigatórios.' });
    }

    try {
      const atendente = await Atendente.findOne({ where: { login } });
      if (!atendente) {
        return res.status(404).json({ error: 'Atendente não encontrado.' });
      }

      const valido = await bcrypt.compare(senha, atendente.senha_hash);
      if (!valido) {
        return res.status(401).json({ error: 'Senha inválida.' });
      }

      const token = jwt.sign({ id: atendente.id, nome: atendente.nome }, secret, { expiresIn: '1d' });
      res.json({ token, atendente: { id: atendente.id, nome: atendente.nome, login: atendente.login } });
    } catch (err) {
      res.status(500).json({ error: 'Erro no login.', details: err.message });
    }
  }
};
