const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API de SJ CUSTOMS",
            version: "1.0.0",
            description: "Documentación de la API para la web de tuneo y personalización de coches.",
        },
        servers: [{ url: "http://localhost:5000" }],
    },
    apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = (app) => {
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log("✅ Swagger configurado en /docs");
};
