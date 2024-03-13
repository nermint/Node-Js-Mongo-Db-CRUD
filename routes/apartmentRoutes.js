const express = require("express");

const apartmentController = require("../controllers/apartmentController");

const router = express.Router();

router.get("/", apartmentController.getAllApartments);

module.exports = router;
