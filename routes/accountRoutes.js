const express = require("express");

const accountController = require("../controllers/accountController");

const router = express.Router();

router.get("/", accountController.getAllAccounts);
router.get("/:id", accountController.getAccountById);
router.post("/", accountController.createAccount);
router.put("/:id", accountController.updateAccount);
router.delete("/:id", accountController.deleteAccount);

module.exports = router;
