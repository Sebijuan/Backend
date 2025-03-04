const mongoose = require("mongoose");

const configSchema = new mongoose.Schema({
    car: { type: mongoose.Schema.Types.ObjectId, ref: "Car", required: true },
    color: { type: String, required: true },
    interior: { type: String, required: true },
    extras: [{ type: String }],
    engine: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Config", configSchema);
