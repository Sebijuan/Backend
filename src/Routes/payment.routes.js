const express = require("express");
const { processPayment, getPaymentOptions } = require("../controllers/payments.controller");

const router = express.Router();

router.get("/options", getPaymentOptions);
router.post("/pay", processPayment);

module.exports = router;
