const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    engineOptions: [{ type: String, required: true }], // Opciones de motor
    imageUrl: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Car", carSchema);
