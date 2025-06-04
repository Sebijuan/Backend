import sendEmail from "../Services/email.service.js";

export const sendPurchaseEmail = async (req, res) => {
    try {
        const { carName, imageUrl, config, price, paymentType } = req.body;

        const html = `
            <h2>¡Nueva compra realizada!</h2>
            <p><b>Coche:</b> ${carName}</p>
            <p><b>Precio:</b> ${price} €</p>
            <p><b>Tipo de pago:</b> ${paymentType}</p>
            <p><b>Configuración:</b></p>
            <ul>
                ${config?.Interior ? `<li>Interior: ${config.Interior.join(", ")}</li>` : ""}
                ${config?.Exterior ? `<li>Exterior: ${config.Exterior.join(", ")}</li>` : ""}
                ${config?.Motor ? `<li>Motor: ${config.Motor.join(", ")}</li>` : ""}
                ${config?.Extras ? `<li>Extras: ${config.Extras.join(", ")}</li>` : ""}
                ${config?.Color ? `<li>Color: ${config.Color.join(", ")}</li>` : ""}
            </ul>
            <img src="${imageUrl}" alt="Foto del coche" style="max-width:400px;" />
        `;

        await sendEmail(
            "sebipro2607@gmail.com",
            "Nueva compra en tu página",
            html
        );

        res.json({ message: "Correo enviado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al enviar el correo", error: error.message });
    }
};