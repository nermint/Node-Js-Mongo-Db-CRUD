const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes");
const apartmentRoutes = require("./apartmentRoutes");

router.use("/users", userRoutes);
router.use("/products", apartmentRoutes);

module.exports = router;
