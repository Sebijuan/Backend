import express from"express";

import authRoutes from"./auth.routes.js";
import carsRoutes from"./car.routes.js";
import configRoutes from"./config.routes.js";
import ordersRoutes from"./order.routes.js";
import paymentsRoutes from"./payment.routes.js";
import usersRoutes from"./user.routes.js";
import likesRoutes from"./likes.routes.js";
import compareRoutes from"./compare.routes.js";
import contactRoutes from"./contact.routes.js";
import emailRoutes from"./email.routes.js";

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
router.use("/email", emailRoutes);
export default router;
