exports.getPaymentOptions = async (req, res) => {
    res.json([
        { type: "Contado", interest: 0 },
        { type: "Financiado", interest: 5 },
    ]);
};

exports.processPayment = async (req, res) => {
    res.json({ message: "Pago procesado con éxito" });
};
