import express from"express";
import { getConfigOptions, saveConfig } from"../Controllers/config.controller.js";

const router = express.Router();

router.get("/", getConfigOptions);
router.post("/", saveConfig);

export default router;
