import express from"express";
import { getUserProfile, updateUserProfile } from"../Controllers/user.controller.js";

const router = express.Router();

router.get("/profile", getUserProfile);
router.put("/profile", updateUserProfile);

export default router;
