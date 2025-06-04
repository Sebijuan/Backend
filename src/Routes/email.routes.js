import express from "express";
import { sendPurchaseEmail } from "../Controllers/email.controller.js";

const router = express.Router();

router.post("/email", sendPurchaseEmail);

export default router;