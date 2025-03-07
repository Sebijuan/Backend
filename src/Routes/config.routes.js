import express from "express";
import { getConfigOptions, saveConfig } from "../Controllers/config.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/config:
 *   get:
 *     summary: Obtiene opciones de configuración de coches
 *     tags: [Config]
 *     responses:
 *       200:
 *         description: Opciones de configuración
 */
router.get("/", getConfigOptions);

/**
 * @swagger
 * /api/config:
 *   post:
 *     summary: Guarda la configuración de un coche
 *     tags: [Config]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               car:
 *                 type: string
 *               color:
 *                 type: string
 *               interior:
 *                 type: string
 *               extras:
 *                 type: array
 *                 items:
 *                   type: string
 *               engine:
 *                 type: string
 *     responses:
 *       200:
 *         description: Configuración guardada
 */
router.post("/", saveConfig);

export default router;
