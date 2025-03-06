const nodemailer = require("nodemailer");
const config = require("../config");

const sendEmail = async (to, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: config.email.user,
                pass: config.email.pass,
            },
        });

        await transporter.sendMail({
            from: config.email.user,
            to,
            subject,
            text,
        });

        console.log(`📧 Correo enviado a ${to}`);
    } catch (error) {
        console.error("❌ Error al enviar el correo:", error);
    }
};

module.exports = sendEmail;
