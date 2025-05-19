const express = require('express');
const router = express.Router();
const pool = require('../database');

// Ruta para obtener todos los usuarios
router.get('/usuarios', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).send('Error al obtener usuarios');
  }
});

module.exports = router;

