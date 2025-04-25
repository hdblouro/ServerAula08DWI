const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// Rota com Body
app.get("/texto/:nome/:indice", (req, res) => {
    const { nome, indice } = req.params;
    res.json({ letra: nome[parseInt(indice)] });
});