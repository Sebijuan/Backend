import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "SJ CUSTOMS API",
            version: "1.0.0",
            description: "API para la gestión de tuneo y personalización de coches",
        },
        servers: [
            {
                url: "http://localhost:5000",
                description: "Servidor de desarrollo",
            },
        ],
    },
    apis: [path.join(__dirname, "../Routes/*.js")], // Ruta corregida para evitar problemas
};

const swaggerSpec = swaggerJsDoc(options);

// Guardar la especificación en un archivo JSON
const swaggerFilePath = path.join(__dirname, "swagger.json");
fs.writeFileSync(swaggerFilePath, JSON.stringify(swaggerSpec, null, 2));
console.log(`📄 Swagger JSON generado en: ${swaggerFilePath}`);

const loadSwagger = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log("📄 Swagger UI disponible en http://localhost:5000/api-docs");
};

export default loadSwagger;
