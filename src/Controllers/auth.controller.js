const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/user.model");
const config = require("../config");

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, email, password: hashedPassword });

        res.status(201).json({ message: "Usuario registrado exitosamente", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Error al registrar usuario", error });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Credenciales incorrectas" });
        }

        const token = jwt.sign({ id: user._id }, config.jwt.secret, { expiresIn: config.jwt.expiresIn });
        res.json({ message: "Inicio de sesión exitoso", token });
    } catch (error) {
        res.status(500).json({ message: "Error al iniciar sesión", error });
    }
};

exports.forgotPassword = async (req, res) => {
    // Lógica para enviar un correo con enlace de recuperación
    res.json({ message: "Correo de recuperación enviado" });
};

exports.resetPassword = async (req, res) => {
    // Lógica para restablecer la contraseña
    res.json({ message: "Contraseña restablecida" });
};
