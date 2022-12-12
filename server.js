require('dotenv').config();

const app = require("./src/app.js");
const db = require("./src/database");

db.hasConnection();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}...`);
});