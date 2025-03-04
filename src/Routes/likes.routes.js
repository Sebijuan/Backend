const express = require("express");
const { likeCar, unlikeCar, getUserLikes } = require("../controllers/likes.controller");

const router = express.Router();

router.post("/:carId", likeCar);
router.delete("/:carId", unlikeCar);
router.get("/", getUserLikes);

module.exports = router;
