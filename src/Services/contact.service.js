const Contact = require("../models/contact.model");
const { sendEmail } = require("./email.service");

const sendContactMessage = async (messageData) => {
    const contact = await Contact.create(messageData);

    // Enviar correo de confirmación al usuario
    await sendEmail(
        messageData.email,
        "Hemos recibido tu mensaje",
        "Gracias por contactarnos. Te responderemos lo antes posible."
    );

    return contact;
};

module.exports = { sendContactMessage };
