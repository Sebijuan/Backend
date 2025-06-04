import nodemailer from "nodemailer";
import config from "../config.js";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: config.email.user,
        pass: config.email.pass,
    },
});

const sendEmail = async (to, subject, text) => {
    try {
        await transporter.sendMail({
            from: `"SJ CUSTOMS" <${config.email.user}>`,
            to, // puede ser un array de emails
            subject,
            text,
        });
        console.log(`📧 Correo enviado a ${to}`);
    } catch (error) {
        console.error("❌ Error al enviar el correo:", error);
    }
};

export default sendEmail;