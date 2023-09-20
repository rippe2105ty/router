const express = require('express');
const listViewRouter = express.Router();

// Ruta para listar tareas completas (GET /completas)
listViewRouter.get('/completas', (req, res) => {
  // Lógica para listar tareas completas
  res.send('Lista de tareas completas');
});

// Ruta para listar tareas incompletas (GET /incompletas)
listViewRouter.get('/incompletas', (req, res) => {
  // Lógica para listar tareas incompletas
  res.send('Lista de tareas incompletas');
});

module.exports = listViewRouter;
