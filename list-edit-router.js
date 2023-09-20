const express = require('express');
const listEditRouter = express.Router();

// Ruta para crear una tarea (POST /crear)
listEditRouter.post('/crear', (req, res) => {
  // Lógica para crear una tarea
  res.send('Tarea creada');
});

// Ruta para eliminar una tarea (DELETE /eliminar)
listEditRouter.delete('/eliminar/:id', (req, res) => {
  const taskId = req.params.id;
  // Lógica para eliminar una tarea con el ID proporcionado
  res.send(`Tarea con ID ${taskId} eliminada`);
});

// Ruta para actualizar una tarea (PUT /actualizar/:id)
listEditRouter.put('/actualizar/:id', (req, res) => {
  const taskId = req.params.id;
  // Lógica para actualizar una tarea con el ID proporcionado
  res.send(`Tarea con ID ${taskId} actualizada`);
});

module.exports = listEditRouter;
