import jwt from"jsonwebtoken";
import config from"../config.js";

const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, email: user.email },
        config.jwtSecret,
        { expiresIn: "7d" } // Expira en 7 días
    );
};

export default generateToken;
