import Payment from "../Models/payment.model.js";

export const processPayment = async (orderId, amount) => {
    if (!orderId || typeof amount !== "number") {
        throw new Error("Datos de pago inválidos");
    }

    // Simulación de creación de pago
    const payment = await Payment.create({
        order: orderId,
        amount,
        status: "Procesado",
    });

    // Aquí podrías conectar con una pasarela de pago real

    return payment;
};