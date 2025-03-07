import express from"express";
import { processPayment, getPaymentOptions } from"../Controllers/payment.controller.js";

const router = express.Router();

router.get("/options", getPaymentOptions);
router.post("/pay", processPayment);

export default router;
