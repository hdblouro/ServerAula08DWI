//console.log("Olá Mundo!");

// Importa a biblioteca dotenv para carregar variáveis de ambiente do arquivo .env
// Importa o framework Express para criar e gerenciar o servidor web

const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

// Cria uma instância do aplicativo Express

const app = express();

const port = process.env.PORT || 3000;

// Inicia o servidor na porta definida e exibe uma mensagem no console

app.listen(port, function () {
  console.log(`Servidor rodando na porta ${port}`);
});

// Rota GET para a raiz "/" que retorna uma mensagem ao usuário

app.get("/", function(req, res) {
  res.send("Método HTTP GET");
});

// Rota GET para "/teste" que retorna uma mensagem ao usuário

app.get("/teste", function(req, res) {
  res.send("Método HTTP GET para /teste");
});

// Rota POST para "/teste" que retorna uma mensagem ao usuário

app.post("/teste", function(req, res) {
  res.send("Método HTTP POST para /teste ");
});

// Rota PUT para "/teste" que retorna uma mensagem ao usuário

app.put("/teste", function(req, res) {
  res.send("Método HTTP PUT para /teste ");
});

// Rota DELETE para "/teste" que retorna uma mensagem ao usuário

app.delete("/teste", function(req, res) {
  res.send("Método HTTP DELETE para /teste ");
});

// Rota com parâmetro dinâmico na URL
app.get("/usuario/:id", (req, res) => {
  const { id } = req.params; // Pegar o valor passado na URL
  res.send(`Usuário com ID: ${id}`);
});

// Rota com Query Parameters
app.get("/usuarios", (req, res) => {
  const { page, limit } = req.query; // Pegar os parâmetros passados na URL
  res.send(`Página: ${page}, Limite: ${limit}`);
});

app.use(express.json());

// Rota com Body
app.post("/usuario", (req, res) => {
  const { nome, email } = req.body;
  res.send(`Nome: ${nome}, Email: ${email}`);
});
