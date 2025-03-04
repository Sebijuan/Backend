const mongoose = require("mongoose");
const config = require("../config");

const connectDB = async () => {
    try {
        await mongoose.connect(config.database.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Conexión a la base de datos establecida");
    } catch (error) {
        console.error("❌ Error al conectar a la base de datos:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
