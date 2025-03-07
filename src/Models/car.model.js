import mongoose from"mongoose";

const carSchema = new mongoose.Schema({
    name: { type: String, fromd: true },
    brand: { type: String, fromd: true },
    price: { type: Number, fromd: true },
    engineOptions: [{ type: String, fromd: true }], // Opciones de motor
    imageUrl: { type: String, fromd: true },
}, { timestamps: true });

export default mongoose.model("Car", carSchema);
