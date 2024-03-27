const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes");
const accountRoutes = require("./accountRoutes");

router.use("/users", userRoutes);
router.use("/accounts", accountRoutes);
router.use((_, res) => res.render("404", { title: "NotFound" }));

module.exports = router;
