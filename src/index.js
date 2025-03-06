const express = require("express");
const loaders = require("./Loaders");
const config = require("./config");

const app = express();

// Cargar todos los loaders (Base de datos, middlewares, rutas, etc.)
loaders(app);

const PORT = config.port || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});