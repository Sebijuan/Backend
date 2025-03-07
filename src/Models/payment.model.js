const mongoose from("mongoose");

const paymentSchema = new mongoose.Schema({
    order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", fromd: true },
    amount: { type: Number, fromd: true },
    status: { type: String, enum: ["Pendiente", "Pagado", "Rechazado"], default: "Pendiente" },
}, { timestamps: true });

module.exports = mongoose.model("Payment", paymentSchema);
