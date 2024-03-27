const Account = require("../models/account");
const paginate = require("../helpers/pagination");
const { badRequestValidator } = require("../helpers/validator");
const { validateReqBody } = require("../helpers/validator");

const getAllAccounts = async (req, res) => {
  const page = req.query.page || 1;
  const pageSize = req.query.pageSize || 10;
  try {
    const accounts = await paginate(Account, page, pageSize);
    res.send(accounts);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

const getAccountById = async (req, res) => {
  const id = req.params.id;
  try {
    const account = await Account.findById(id);
    if (!account) {
      return res.status(404).send("Account not found");
    }
    res.send(account);
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(404).json({ error: "Account not found" });
    }
    res.send(error.message);
    console.error("Error connecting to MongoDB:", error);
  }
};

const createAccount = (req, res) => {
  const validationResult = validateReqBody(req.body, Account);

  if (validationResult) {
    return res.status(400).send(validationResult);
  }

  const account = new Account(req.body);

  account
    .save()
    .then((result) => {
      console.log("User saved successfully");
      res.status(201).send(result);
    })
    .catch((error) => {
      const validationErrors = badRequestValidator();
      if (validationErrors) {
        return res.status(400).json(validationErrors);
      }
      console.error("Error saving user:", error.message);
      res.status(500).send(error.message);
    });
};

const updateAccount = async (req, res) => {
  const validationResult = validateReqBody(req.body, Account);

  if (validationResult) {
    return res.status(400).send(validationResult);
  }

  try {
    const updatedAccount = await Account.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.send(updatedAccount);
  } catch (error) {
    const validationErrors = badRequestValidator();
    if (validationErrors) {
      return res.status(400).json(validationErrors);
    }
    console.error("Error updating user:", error.message);
    res.status(500).send(error.message);
  }
};

const deleteAccount = async (req, res) => {
  const id = req.params.id;
  try {
    const deletionResult = await Account.findByIdAndDelete(id);
    if (!deletionResult) {
      return res.status(404).json({ error: "Account not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.send(error.message);
    console.log(error);
  }
};

module.exports = {
  getAllAccounts,
  getAccountById,
  createAccount,
  updateAccount,
  deleteAccount,
};
