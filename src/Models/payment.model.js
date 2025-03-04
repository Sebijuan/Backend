const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ["Pendiente", "Pagado", "Rechazado"], default: "Pendiente" },
}, { timestamps: true });

module.exports = mongoose.model("Payment", paymentSchema);
