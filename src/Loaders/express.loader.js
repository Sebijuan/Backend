const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const routes = require("../Routes");

module.exports = (app) => {
    app.use(cors());
    app.use(helmet());
    app.use(morgan("dev"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Rutas principales
    app.use("/api", routes);

    // Ruta de prueba
    app.get("/", (req, res) => res.send("🚀 API funcionando correctamente"));

    console.log("✅ Express configurado correctamente");
};
