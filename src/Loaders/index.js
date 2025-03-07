import expressLoader from"./express.loader.js";
import swaggerLoader from"./swagger.loader.js";
import databaseLoader from"./database.loader.js";

const loaders  = (app) => {
    databaseLoader();
    expressLoader(app);
    swaggerLoader(app);
};
export default loaders;