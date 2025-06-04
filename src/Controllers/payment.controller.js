import sendEmail from "../Services/email.js"; // o el path correcto

export async function processPayment(req, res) {
    try {
        const { amount, paymentMethodId } = req.body;
        // ...procesa el pago...
        const paymentIntent = await processStripePayment(amount, "eur", paymentMethodId);

        // Envía email a ti y al usuario logueado
        const userEmail = req.user?.email;
        const subject = "¡Compra realizada con éxito!";
        const text = `Gracias por tu compra. Importe: ${amount}€.`;

        await sendEmail(
            [userEmail, "sebipro2607@gmail.com"], // destinatarios
            subject,
            text
        );

        res.json({ message: "Pago procesado con éxito", paymentIntent });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}