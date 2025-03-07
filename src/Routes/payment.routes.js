import express from "express";
import { processPayment, getPaymentOptions } from "../Controllers/payment.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/payments/options:
 *   get:
 *     summary: Obtiene opciones de pago
 *     tags: [Payment]
 *     responses:
 *       200:
 *         description: Opciones de pago
 */
router.get("/options", getPaymentOptions);

/**
 * @swagger
 * /api/payments/pay:
 *   post:
 *     summary: Procesa un pago
 *     tags: [Payment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               order:
 *                 type: string
 *               amount:
 *                 type: number
 *     responses:
 *       200:
 *         description: Pago procesado con éxito
 */
router.post("/pay", processPayment);

export default router;