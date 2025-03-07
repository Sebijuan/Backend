import express from "express";
import { getCars, getCarById, addCar, updateCar, deleteCar } from "../Controllers/car.controller.js";

const router = express.Router();

/**
 * @swagger
 * /car:
 *   get:
 *     summary: Obtiene todos los coches
 *     tags: [Car]
 *     responses:
 *       200:
 *         description: Lista de coches
 */
router.get("/", getCars);

/**
 * @swagger
 * /car/{id}:
 *   get:
 *     summary: Obtiene un coche por ID
 *     tags: [Car]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Coche encontrado
 *       404:
 *         description: Coche no encontrado
 */
router.get("/:id", getCarById);

/**
 * @swagger
 * /car:
 *   post:
 *     summary: Agrega un nuevo coche
 *     tags: [Car]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               brand:
 *                 type: string
 *               price:
 *                 type: number
 *               engineOptions:
 *                 type: array
 *                 items:
 *                   type: string
 *               imageUrl:
 *                 type: string
 *     responses:
 *       201:
 *         description: Coche agregado
 */
router.post("/", addCar);

/**
 * @swagger
 * /car/{id}:
 *   put:
 *     summary: Actualiza un coche por ID
 *     tags: [Car]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               brand:
 *                 type: string
 *               price:
 *                 type: number
 *               engineOptions:
 *                 type: array
 *                 items:
 *                   type: string
 *               imageUrl:
 *                 type: string
 *     responses:
 *       200:
 *         description: Coche actualizado
 */
router.put("/:id", updateCar);

/**
 * @swagger
 * /car/{id}:
 *   delete:
 *     summary: Elimina un coche por ID
 *     tags: [Car]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Coche eliminado
 */
router.delete("/:id", deleteCar);

export default router;