const User from("../Models/user.model");
const bcrypt from("bcryptjs");
const generateToken from("../Utils/generateToken");

const registerUser = async (userData) => {
    const { username, email, password } = userData;

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error("El usuario ya está registrado");

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuario
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    return { user, token: generateToken(user) };
};

const loginUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Credenciales incorrectas");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Credenciales incorrectas");

    return { user, token: generateToken(user) };
};

module.exports = { registerUser, loginUser };
