import express from "express";
import { compareCars } from "../Controllers/compare.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/compare:
 *   post:
 *     summary: Compara coches
 *     tags: [Compare]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cars:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Comparación realizada
 */
router.post("/", compareCars);

export default router;