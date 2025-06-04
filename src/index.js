import app from "./app.js";
import config from "./config.js";
import loaders from "./Loaders/index.js";
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

import emailRoutes from "./Routes/email.routes.js";
app.use("/api", emailRoutes);
dotenv.config();

const PORT = config.port || 5000;
loaders(app);
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

(async function() {
    // Configuration using CLOUDINARY_URL from .env
    cloudinary.config({
        cloudinary_url: process.env.CLOUDINARY_URL
    });

    try {
        // List all resources in your Cloudinary account
        const resources = await cloudinary.api.resources({
            type: 'upload',
            prefix: 'https://collection.cloudinary.com/ddeazkweg/db417e57026dc3f3279481ba2d80681a', // Replace with your collection prefix
            max_results: 100
        });

        // Process each image in the collection
        for (const resource of resources.resources) {
            const imageUrl = resource.secure_url;

            // Optimize delivery by resizing and applying auto-format and auto-quality
            const optimizeUrl = cloudinary.url(resource.public_id, {
                fetch_format: 'auto',
                quality: 'auto'
            });
            console.log(`Optimized URL for image ${resource.public_id}:`, optimizeUrl);

            // Transform the image: auto-crop to square aspect_ratio
            const autoCropUrl = cloudinary.url(resource.public_id, {
                crop: 'auto',
                gravity: 'auto',
                width: 500,
                height: 500,
            });
            console.log(`Auto-cropped URL for image ${resource.public_id}:`, autoCropUrl);
        }
    } catch (error) {
        console.log('Error fetching resources:', error);
    }
})();