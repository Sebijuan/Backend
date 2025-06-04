import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../Models/user.model.js";
import config from "../config.js";
import nodemailer from "nodemailer";

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, email, password: hashedPassword });

        res.status(201).json({ message: "Usuario registrado exitosamente", user: newUser });
    } catch (error) {
        console.error("Error en el registro:", error);
        res.status(500).json({ message: "Error al registrar usuario", error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Intentando iniciar sesión con:", email);

        const user = await User.findOne({ email });
        if (!user) {
            console.log("Usuario no encontrado:", email);
            return res.status(401).json({ message: "Credenciales incorrectas" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            console.log("Contraseña incorrecta para el usuario:", email);
            return res.status(401).json({ message: "Credenciales incorrectas" });
        }

        const token = jwt.sign({ id: user._id }, config.jwt.secret, { expiresIn: config.jwt.expiresIn });

        res.json({ message: "Inicio de sesión exitoso", token, user: { id: user._id, username: user.username, email: user.email } });
    } catch (error) {
        console.error("Error en el inicio de sesión:", error);
        res.status(500).json({ message: "Error al iniciar sesión", error: error.message });
    }
};


// Configurar transporte de nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER, // Tu correo
        pass: process.env.EMAIL_PASS, // Tu contraseña o App Password
    },
});

export const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        // Generar token de recuperación (opcional)
        const resetToken = Math.random().toString(36).substring(2, 12);

        // Configurar el transporte de correo
        const transporter = nodemailer.createTransport({
            host: config.email.host,
            port: config.email.port,
            secure: config.email.secure, // true para 465, false para otros
            auth: {
                user: config.email.user,
                pass: config.email.pass
            }
        });

        // Configurar email
        const mailOptions = {
            from: `"Soporte" <${config.email.user}>`,
            to: email,
            subject: "Recuperación de contraseña",
            text: `Hola, usa este código para recuperar tu contraseña: ${resetToken}`,
            html: `<p>Hola, usa este código para recuperar tu contraseña: <b>${resetToken}</b></p>`
        };

        // Enviar correo
        await transporter.sendMail(mailOptions);

        res.json({ message: "Correo de recuperación enviado" });
    } catch (error) {
        console.error("❌ Error en forgotPassword:", error);
        res.status(500).json({ message: "Error al enviar correo", error });
    }
};
export const resetPassword = async (req, res) => {
    try {
        const { email, newPassword } = req.body;

        // Verificar si el usuario existe
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        // Encriptar la nueva contraseña
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();

        res.json({ message: "Contraseña restablecida con éxito" });
    } catch (error) {
        console.error("Error al restablecer la contraseña:", error);
        res.status(500).json({ message: "Error al restablecer la contraseña", error: error.message });
    }
};