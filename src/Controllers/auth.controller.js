import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../Models/user.model.js";
import config from "../config.js";

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, email, password: hashedPassword });

        res.status(201).json({ message: "Usuario registrado exitosamente", user: newUser });
    } catch (error) {
        console.error("Error en el registro:", error);
        res.status(500).json({ message: "Error al registrar usuario", error });
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
        res.json({ message: "Inicio de sesión exitoso", token });
    } catch (error) {
        console.error("Error en el inicio de sesión:", error);
        res.status(500).json({ message: "Error al iniciar sesión", error });
    }
};

export const forgotPassword = async (req, res) => {
    // Lógica para enviar un correo con enlace de recuperación
    res.json({ message: "Correo de recuperación enviado" });
};

export const resetPassword = async (req, res) => {
    // Lógica para restablecer la contraseña
    res.json({ message: "Contraseña restablecida" });
};