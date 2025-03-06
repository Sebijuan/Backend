const expressLoader = require("./express.loader");
const swaggerLoader = require("./swagger.loader");
const databaseLoader = require("./database.loader");

module.exports = (app) => {
    databaseLoader();
    expressLoader(app);
    swaggerLoader(app);
};