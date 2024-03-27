const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema(
  {
    account_id: {
      type: Number,
      required: true,
    },
    limit: {
      type: Number,
      required: true,
      min: 500,
      max: 5000,
    },
    products: {
      type: [String],
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const Account = mongoose.model("accounts", AccountSchema);
module.exports = Account;
