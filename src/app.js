import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import index from "./Loaders/index.js"; // Importar Swagger

import emailRoutes from "./Routes/email.routes.js"; // <-- Importa tus rutas aquí

const app = express();

// Middlewares globales
app.use(cors()); // Habilita CORS para permitir peticiones desde otros dominios
app.use(helmet()); // Protege la API contra ataques comunes
app.use(morgan("dev")); // Muestra logs de las peticiones en consola
app.use(express.json()); // Permite recibir JSON en el body de las peticiones
app.use(express.urlencoded({ extended: true })); // Permite recibir datos en formato URL-encoded

// Cargar documentación Swagger
index(app);

// Monta tus rutas ANTES del middleware 404
app.use("/api/purchase", emailRoutes); // <-- Así la ruta será /api/purchase/email

// Middleware para manejar rutas no encontradas (404) -- SIEMPRE AL FINAL
app.use((req, res, next) => {
    res.status(404).json({ message: "Ruta no encontrada" });
});

// Middleware para manejar errores globales
app.use((err, req, res, next) => {
    console.error("❌ Error:", err.stack);
    res.status(500).json({ message: "Error interno del servidor" });
});

export default app;