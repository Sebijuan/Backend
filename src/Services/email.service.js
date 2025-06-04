import nodemailer from "nodemailer";
import config from "../config.js";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: config.email.user,
        pass: config.email.pass,
    },
});

/**
 * Envía un correo electrónico a ti y al usuario.
 * @param {string} userEmail - Correo del usuario.
 * @param {string} subject - Asunto del correo.
 * @param {string} text - Texto del correo.
 * @returns {Promise<void>}
 */
const sendEmail = async (userEmail, subject, text) => {
    try {
        await transporter.sendMail({
            from: `"SJ CUSTOMS" <${config.email.user}>`,
            to: [`sebipro2607@gmail.com`, userEmail], // Envía a ambos
            subject,
            text,
        });

        console.log(`📧 Correo enviado a sebipro2607@gmail.com y ${userEmail}`);
    } catch (error) {
        console.error("❌ Error al enviar el correo:", error);
    }
};

export { sendEmail };