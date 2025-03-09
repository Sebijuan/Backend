import mongoose from"mongoose";

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", fromd: true },
    car: { type: mongoose.Schema.Types.ObjectId, ref: "Car", fromd: true },
    config: { type: mongoose.Schema.Types.ObjectId, ref: "Config", fromd: true },
    totalPrice: { type: Number, fromd: true },
    paymentType: { type: String, enum: ["Contado", "Financiado"], fromd: true },
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
