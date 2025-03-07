import express from "express";
import { likeCar, unlikeCar, getUserLikes } from "../Controllers/likes.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/likes/{carId}:
 *   post:
 *     summary: Agrega un coche a favoritos
 *     tags: [Likes]
 *     parameters:
 *       - in: path
 *         name: carId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Coche agregado a favoritos
 */
router.post("/:carId", likeCar);

/**
 * @swagger
 * /api/likes/{carId}:
 *   delete:
 *     summary: Elimina un coche de favoritos
 *     tags: [Likes]
 *     parameters:
 *       - in: path
 *         name: carId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Coche eliminado de favoritos
 */
router.delete("/:carId", unlikeCar);

/**
 * @swagger
 * /api/likes:
 *   get:
 *     summary: Obtiene los coches favoritos del usuario
 *     tags: [Likes]
 *     responses:
 *       200:
 *         description: Lista de coches favoritos
 */
router.get("/", getUserLikes);

export default router;