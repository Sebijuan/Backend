import mongoose from 'mongoose';
import config from '../config.js';  // Ahora importamos todo el objeto config

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Conexión a la base de datos establecida");
    } catch (error) {
        console.error("❌ Error al conectar a la base de datos:", error);
        process.exit(1);
    }
};

export default connectDB;
