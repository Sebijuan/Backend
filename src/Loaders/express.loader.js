import express from"express";
import cors from"cors";
import helmet from"helmet";
import morgan from"morgan";
import routes from"../Routes/index.js";

const expressloader  = (app) => {
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
export default expressloader;