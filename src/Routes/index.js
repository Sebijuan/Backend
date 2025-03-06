const express = require("express");

const authRoutes = require("./auth.routes");
const carsRoutes = require("./car.routes");
const configRoutes = require("./config.routes");
const ordersRoutes = require("./orders.routes");
const paymentsRoutes = require("./payments.routes");
const usersRoutes = require("./users.routes");
const likesRoutes = require("./likes.routes");
const compareRoutes = require("./compare.routes");
const contactRoutes = require("./contact.routes");

const router = express.Router();

// Definir rutas principales
router.use("/auth", authRoutes);
router.use("/car", carsRoutes);
router.use("/config", configRoutes);
router.use("/orders", ordersRoutes);
router.use("/payments", paymentsRoutes);
router.use("/users", usersRoutes);
router.use("/likes", likesRoutes);
router.use("/compare", compareRoutes);
router.use("/contact", contactRoutes);

module.exports = router;
