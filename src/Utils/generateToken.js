const jwt = require("jsonwebtoken");
const config = require("../config");

const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, email: user.email },
        config.jwtSecret,
        { expiresIn: "7d" } // Expira en 7 días
    );
};

module.exports = generateToken;
