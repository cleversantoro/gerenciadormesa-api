
# Gerenciador de Mesas - Backend (SQLite)

Backend para sistema de controle de mesas e pedidos (restaurante/bar), usando Node.js, Express e Sequelize com SQLite.

## 🚀 Instalação

```bash
git clone ...
cd gerenciador-mesas-backend
npm install
```

## 🧪 Execução

```bash
npm run dev
```

## 📚 Endpoints

- `GET /api/mesas` → lista mesas
- `POST /api/mesas` → abre mesa
- `POST /api/mesas/:id/fechar` → fecha mesa
- `POST /api/pedidos` → cria pedido
- `GET /api/pedidos/:mesaId` → pedidos da mesa

## 🧱 Banco

O banco SQLite será criado automaticamente no arquivo `database.sqlite`.

---
Feito com ❤️ e café por Clever + ChatGPT.
