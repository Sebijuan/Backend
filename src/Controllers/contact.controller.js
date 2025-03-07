import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const sendContactMessage = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    try {
        // Configurar el transporte de Nodemailer
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Configurar el email
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER, // Tu email
            subject: `Nuevo mensaje de contacto de ${name}`,
            text: `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`,
        };

        // Enviar el email
        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: "Mensaje enviado con éxito" });
    } catch (error) {
        console.error("Error al enviar el mensaje:", error);
        return res.status(500).json({ message: "Error al enviar el mensaje" });
    }
};
