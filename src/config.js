require("dotenv").config();

module.exports = {
    port: process.env.PORT || 3000,
    database: {
        url: process.env.DATABASE_URL || "mongodb://localhost:27017/sj_customs",
    },
    jwt: {
        secret: process.env.JWT_SECRET || "secreto_super_seguro",
        expiresIn: process.env.JWT_EXPIRES_IN || "7d",
    },
    email: {
        service: process.env.EMAIL_SERVICE || "gmail",
        user: process.env.EMAIL_USER || "tuemail@gmail.com",
        pass: process.env.EMAIL_PASS || "tucontraseña",
    },
    payment: {
        provider: process.env.PAYMENT_PROVIDER || "stripe",
        apiKey: process.env.PAYMENT_API_KEY || "clave_api_aqui",
    },
};
