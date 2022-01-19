const express = require("express");
const router = express.Router();
const handler = require("./apiHandler");

router.get("/", handler);
router.get("/filter", handler);

module.exports = router;