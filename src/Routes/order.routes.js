import express from "express";
import { getOrders, createOrder } from "../Controllers/order.controller.js";

const router = express.Router();

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Obtiene todos los pedidos
 *     tags: [Order]
 *     responses:
 *       200:
 *         description: Lista de pedidos
 */
router.get("/", getOrders);

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Crea un nuevo pedido
 *     tags: [Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *               car:
 *                 type: string
 *               config:
 *                 type: string
 *               totalPrice:
 *                 type: number
 *               paymentType:
 *                 type: string
 *     responses:
 *       201:
 *         description: Pedido creado
 */
router.post("/", createOrder);

export default router;