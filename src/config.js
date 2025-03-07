import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Cargar variables de entorno
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
dotenv.config({ path: path.resolve(dirname, '.env') });

// Exportar MONGO_URI
const mongo = process.env.MONGO_URI;

console.log('url mongo:', mongo); // Verifica que se haya cargado correctamente

export default mongo;
