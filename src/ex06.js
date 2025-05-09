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

app.post("/operacao", (request, response) => {
    const { x, y } = request.body;
    const r = Math.pow(x, y);
    response.send(`${x} ^ ${y} = ${r}`);
});