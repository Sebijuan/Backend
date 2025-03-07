import express from"express";
import { getCars, getCarById, addCar, updateCar, deleteCar } from"../Controllers/car.controller.js";

const router = express.Router();

router.get("/", getCars);
router.get("/:id", getCarById);
router.post("/", addCar);
router.put("/:id", updateCar);
router.delete("/:id", deleteCar);

export default router;
