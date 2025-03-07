import express from "express";
import { register, login, forgotPassword, resetPassword } from "../Controllers/auth.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Registra un nuevo usuario
 *     tags: [Auth]
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
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 *       500:
 *         description: Error al registrar usuario
 */
router.post("/register", register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Inicia sesión de un usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *       401:
 *         description: Credenciales incorrectas
 *       500:
 *         description: Error al iniciar sesión
 */
router.post("/login", login);

/**
 * @swagger
 * /api/auth/forgot-password:
 *   post:
 *     summary: Envía un correo de recuperación de contraseña
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Correo de recuperación enviado
 */
router.post("/forgot-password", forgotPassword);

/**
 * @swagger
 * /api/auth/forgot-password:
 *   post:
 *     summary: Envía un correo de recuperación de contraseña
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "usuario@email.com"
 *     responses:
 *       200:
 *         description: Correo de recuperación enviado
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error al enviar el correo
 */
router.post("/forgot-password", forgotPassword);

router.post("/reset-password", resetPassword);
/**
 * @swagger
 * /api/auth/reset-password:
 *   post:
 *     summary: Restablece la contraseña del usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "usuario@email.com"
 *               newPassword:
 *                 type: string
 *                 example: "NuevaContraseña123"
 *     responses:
 *       200:
 *         description: Contraseña restablecida con éxito
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error al restablecer la contraseña
 */
router.post("/reset-password", resetPassword);

export default router;