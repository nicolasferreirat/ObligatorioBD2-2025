const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

const votosRoutes = require('./routes/Votos');

app.use(cors());
app.use(express.json());

// Usar las rutas definidas en votos.js
app.use('/', votosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
