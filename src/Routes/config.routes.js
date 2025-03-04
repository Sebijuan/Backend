const express = require("express");
const { getConfigOptions, saveConfig } = require("../Controllers/config.controller");

const router = express.Router();

router.get("/", getConfigOptions);
router.post("/", saveConfig);

module.exports = router;
