import mongoose from 'mongoose';
import mongoURI from '../config.js';  // Aquí se importa la URL de MongoDB correctamente

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
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
