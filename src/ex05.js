const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.use(express.json());

app.post("/potencia", (req, res) => {
  const { base, expoente } = req.body; // Pegar os parâmetros passados na URL
  res.json({ resultado: Math.pow(parseFloat(base),parseFloat(expoente)) });
});