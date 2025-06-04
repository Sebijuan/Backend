import express from "express";
import { sendPurchaseEmail } from "../Controllers/email.controller.js";

const router = express.Router();

// Cambia la ruta a /purchase/email
router.post("/email", sendPurchaseEmail);

export default router;