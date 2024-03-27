const express = require("express");

const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.getAllUsers);

router.get("/create", userController.renderUserCreatePage);

router.get("/:id", userController.getUserById);

router.get("/edit/:name/:action", userController.getUserByName);

router.post("/create", userController.createUser);

router.post("/edit/:id", userController.updateUser);

router.post("/:name", userController.deleteUser);

module.exports = router;
