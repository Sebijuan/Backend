const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const routes = require("./src/routes");
const loadSwagger = require("./src/loaders/swagger.loader"); // Importar Swagger

const app = express();

// Middlewares globales
app.use(cors()); // Habilita CORS para permitir peticiones desde otros dominios
app.use(helmet()); // Protege la API contra ataques comunes
app.use(morgan("dev")); // Muestra logs de las peticiones en consola
app.use(express.json()); // Permite recibir JSON en el body de las peticiones
app.use(express.urlencoded({ extended: true })); // Permite recibir datos en formato URL-encoded

// Cargar rutas
app.use("/api", routes);

// Cargar documentación Swagger
loadSwagger(app);

// Middleware para manejar rutas no encontradas (404)
app.use((req, res, next) => {
    res.status(404).json({ message: "Ruta no encontrada" });
});

// Middleware para manejar errores globales
app.use((err, req, res, next) => {
    console.error("❌ Error:", err.stack);
    res.status(500).json({ message: "Error interno del servidor" });
});

module.exports = app;
