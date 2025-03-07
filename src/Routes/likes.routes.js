import express from"express";
import { likeCar, unlikeCar, getUserLikes } from"../Controllers/likes.controller.js";

const router = express.Router();

router.post("/:carId", likeCar);
router.delete("/:carId", unlikeCar);
router.get("/", getUserLikes);

export default router;
