const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get("/soma", (req, res) => {
  const { x, y } = req.query; // Pegar os parâmetros passados na URL
  res.json({ resultado: parseFloat(x)+parseFloat(y) });
});