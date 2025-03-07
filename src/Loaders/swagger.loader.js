import swaggerJsDoc from"swagger-jsdoc";
import swaggerUi from"swagger-ui-express";

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
    apis: ["./src/routes/*.js"], // Ruta donde están definidas las rutas de la API
};

const swaggerSpec = swaggerJsDoc(options);

const loadSwagger = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log("📄 Swagger UI disponible en http://localhost:5000/api-docs");
};

export default loadSwagger;
