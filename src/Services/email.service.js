import nodemailer from "nodemailer";
import config from "../config.js";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: config.email.user,
        pass: config.email.pass,
    },
});

const sendEmail = async (to, subject, html) => {
    try {
        await transporter.sendMail({
            from: `"SJ CUSTOMS" <${config.email.user}>`,
            to,
            subject,
            html, // <-- Cambia 'text' por 'html'
        });
        console.log(`📧 Correo enviado a ${to}`);
    } catch (error) {
        console.error("❌ Error al enviar el correo:", error);
    }
};


export default sendEmail;