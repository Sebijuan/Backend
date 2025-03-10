import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Cargar variables de entorno
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
dotenv.config();

const config = {
    email: {
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
        secure: process.env.EMAIL_SECURE === "true"
    },
    mongoURI: process.env.MONGO_URI,
    jwt: {
        secret: process.env.JWT_SECRET || 'secretKey',
        expiresIn: process.env.JWT_EXPIRES_IN || '1d'
    }
};

export default config;
