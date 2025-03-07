import express from "express";
import { sendContactMessage } from "../Controllers/contact.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/contact:
 *   post:
 *     summary: Envía un mensaje de contacto
 *     tags: [Contact]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       200:
 *         description: Mensaje enviado con éxito
 */
router.post("/", sendContactMessage);

export default router;