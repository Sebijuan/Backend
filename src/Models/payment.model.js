import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    order: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
    amount: Number,
    status: { type: String, enum: ["Pendiente", "Pagado", "Rechazado"], default: "Pendiente" },
    stripePaymentId: String, // Nuevo campo
}, { timestamps: true });

export default mongoose.model("Payment", paymentSchema);