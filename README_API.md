
# Gerenciador de Mesas - API

API desenvolvida com Node.js, Express e Sequelize para gerenciamento de mesas, atendentes, pedidos e produtos em um restaurante.

## 📚 Documentação Swagger

Acesse a documentação em: [http://localhost:3000/api/docs](http://localhost:3000/api/docs)

## 🧪 Collection Postman

Importe o arquivo `postman_collection.json` no Postman para testar os endpoints disponíveis.

## 🚀 Endpoints Principais

### Auth
- `POST /api/auth/login` - Login com JWT.

### Atendentes
- `GET /api/atendentes` - Lista todos.
- `POST /api/atendentes` - Cria um novo.
- `PUT /api/atendentes/:id` - Atualiza.
- `DELETE /api/atendentes/:id` - Remove.

### Mesas
- `GET /api/mesas` - Lista mesas.
- `POST /api/mesas` - Abre uma mesa.
- `POST /api/mesas/:id/fechar` - Fecha a mesa.

### Produtos
- `GET /api/produtos` - Lista produtos.
- `POST /api/produtos` - Cria produto.
- `PUT /api/produtos/:id` - Atualiza.
- `DELETE /api/produtos/:id` - Remove.

### Pedidos
- `POST /api/pedidos` - Cria pedido com itens.
- `GET /api/pedidos/:mesaId` - Lista pedidos por mesa.

## ⚙️ Instalação

```bash
npm install
npm run dev
```

Crie um arquivo `.env` com a variável:
```
JWT_SECRET=mesa1234
```
