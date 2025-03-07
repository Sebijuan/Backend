import express from"express";
import { compareCars } from"../Controllers/compare.controller.js";

const router = express.Router();

router.post("/", compareCars);
export default router;
