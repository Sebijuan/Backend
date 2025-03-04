const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const routes = require("./src/routes");

const app = express();

// Middlewares globales
app.use(cors()); // Habilita CORS para permitir peticiones desde otros dominios
app.use(helmet()); // Protege la API contra ataques comunes
app.use(morgan("dev")); // Muestra logs de las peticiones en consola
app.use(express.json()); // Permite recibir JSON en el body de las peticiones
app.use(express.urlencoded({ extended: true })); // Permite recibir datos en formato URL-encoded

// Cargar rutas
app.use("/api", routes);

// Middleware para manejar errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Error interno del servidor" });
});

module.exports = app;
