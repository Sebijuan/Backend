import mongoose from"mongoose";

const configSchema = new mongoose.Schema({
    car: { type: mongoose.Schema.Types.ObjectId, ref: "Car", fromd: true },
    color: { type: String, fromd: true },
    interior: { type: String, fromd: true },
    extras: [{ type: String }],
    engine: { type: String, fromd: true },
}, { timestamps: true });

module.exports = mongoose.model("Config", configSchema);
