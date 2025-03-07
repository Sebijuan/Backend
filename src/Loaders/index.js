import expressLoader from"./express.loader.js";
import swaggerLoader from"./swagger.loader.js";
import databaseLoader from"./database.loader.js";

const loaders  = (app) => {
    databaseLoader();
    expressLoader(app);
    swaggerLoader(app);
};console.log("url mongo", process.env.MONGO_URI)
export default loaders;