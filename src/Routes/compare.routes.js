const express = require("express");
const { compareCars } = require("../controllers/compare.controller");

const router = express.Router();

router.post("/", compareCars);

module.exports = router;
