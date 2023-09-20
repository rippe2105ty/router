const express = require('express');
const app = express();
const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

// Agregar los routers a la aplicación
app.use('/listar', listViewRouter); // Utilizar '/listar' como prefijo para las rutas de list-view
app.use('/editar', listEditRouter); // Utilizar '/editar' como prefijo para las rutas de list-edit

// Resto de la configuración de la aplicación

app.listen(3000, () => {
  console.log('Servidor Express escuchando en el puerto 3000');
});
