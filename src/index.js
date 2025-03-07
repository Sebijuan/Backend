
import app from"./app.js";
import config from"./config.js";



const PORT = config.port || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});