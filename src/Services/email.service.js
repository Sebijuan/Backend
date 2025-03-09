import nodemailer from"nodemailer";
import config from"../config.js";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: config.email.user,
        pass: config.email.pass,
    },
});

/**
 * Envía un correo electrónico.
 * @param {string} to - Dirección de correo del destinatario.
 * @param {string} subject - Asunto del correo.
 * @param {string} text - Texto del correo.
 * @returns {Promise<void>}
 */
const sendEmail = async (to, subject, text) => {
    try {
        await transporter.sendMail({
            from: `"SJ CUSTOMS" <${config.email.user}>`,
            to,
            subject,
            text,
        });

        console.log(`📧 Correo enviado a ${to}`);
    } catch (error) {
        console.error("❌ Error al enviar el correo:", error);
    }
};

module.exports = { sendEmail };
