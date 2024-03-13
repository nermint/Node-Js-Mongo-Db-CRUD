const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

UserSchema.statics.createFromMongoDB = function (userData) {
  return new this({
    name: userData.name,
    email: userData.email,
  });
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
