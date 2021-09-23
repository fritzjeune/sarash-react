const express = require("express");
const { addDress } = require("../controllers/dress");
const router = express.Router();

router.route("/")
    .post(addDress);

router.route("/reviews");

module.exports = router;