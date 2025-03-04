const express = require("express");
const { sendContactMessage } = require("../Controllers/contact.controller");

const router = express.Router();

router.post("/", sendContactMessage);

module.exports = router;
