export function processPayment(req, res) {
    // Simulación de procesamiento de pago
    res.json({ message: "Pago procesado" });
}

export function getPaymentOptions(req, res) {
    // Simulación de obtención de opciones de pago
    res.json({
        methods: ["Tarjeta de crédito", "PayPal", "Transferencia bancaria"],
    });
}
