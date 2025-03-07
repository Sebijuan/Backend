
import app from"./app.js";
import config from"./config.js";
import loaders from "./Loaders/index.js";


const PORT = config.port || 5000;
loaders(app);
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});