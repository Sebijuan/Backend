const Payment from("../Models/payment.model");

const processPayment = async (orderId, amount) => {
    const payment = await Payment.create({
        order: orderId,
        amount,
        status: "Pendiente",
    });

    // Aquí podrías conectar con una pasarela de pago
    return payment;
};

module.exports = { processPayment };
