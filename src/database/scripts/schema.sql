
CREATE TABLE Mesas (
  id SERIAL PRIMARY KEY,
  numero INTEGER NOT NULL,
  status VARCHAR(20),
  horario_abertura TIMESTAMP,
  horario_fechamento TIMESTAMP
);

CREATE TABLE Atendentes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  login VARCHAR(50),
  senha_hash VARCHAR(255)
);

CREATE TABLE Produtos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  preco DECIMAL(10,2),
  categoria VARCHAR(50)
);

CREATE TABLE Pedidos (
  id SERIAL PRIMARY KEY,
  mesaId INTEGER REFERENCES Mesas(id),
  atendenteId INTEGER REFERENCES Atendentes(id),
  status VARCHAR(20),
  data_hora TIMESTAMP
);

CREATE TABLE ItemPedidos (
  id SERIAL PRIMARY KEY,
  pedidoId INTEGER REFERENCES Pedidos(id),
  produtoId INTEGER REFERENCES Produtos(id),
  quantidade INTEGER,
  obs TEXT
);
