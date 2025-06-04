import { processStripePayment } from "../Services/payment.service.js";

export async function processPayment(req, res) {
    try {
        const { amount, paymentMethodId } = req.body;
        if (!amount || !paymentMethodId) {
            return res.status(400).json({ message: "Faltan datos de pago" });
        }
        const paymentIntent = await processStripePayment(amount, "eur", paymentMethodId);
        res.json({ message: "Pago procesado con éxito", paymentIntent });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export function getPaymentOptions(req, res) {
    res.json({
        methods: ["Tarjeta de crédito"], // Stripe soporta muchas, pero puedes personalizar
    });
}