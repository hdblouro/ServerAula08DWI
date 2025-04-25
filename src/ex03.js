const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.use(express.json());

// Rota com Body
app.post("/texto", (req, res) => {
  const { nome, indice } = req.body;
  res.json({ letra: nome[parseInt(indice)] });
});