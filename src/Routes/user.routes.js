import express from "express";
import { getUserProfile, updateUserProfile } from "../Controllers/user.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/users/profile:
 *   get:
 *     summary: Obtiene el perfil del usuario
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Perfil del usuario
 */
router.get("/profile", getUserProfile);

/**
 * @swagger
 * /api/users/profile:
 *   put:
 *     summary: Actualiza el perfil del usuario
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Perfil actualizado
 */
router.put("/profile", updateUserProfile);

export default router;