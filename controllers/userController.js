const User = require("../models/user");

const getAllUsers = (req, res) => {
  User.find()
    .then((users) => {
      res.render("index", {
        users,
        title: "Users List",
      });
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then((result) => {
      res.render("details", {
        user: result,
        action: "edit",
        title: "User Details",
      });
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

const getUserByName = (req, res) => {
  const name = req.params.name;
  User.findOne({ name: name })
    .then((result) => {
      res.render("edit", { user: result, title: "Edit-User" });
    })
    .catch((err) => {
      console.log(err);
    });
};

const createUser = (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then((result) => {
      res.redirect("/users");
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateUser = (req, res) => {
  User.updateOne({ _id: req.params.id }, req.body)
    .then((result) => {
      res.redirect("/users");
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteUser = (req, res) => {
  const name = req.params.name;
  User.deleteOne({ name: name })
    .then((result) => {
      res.redirect("/users");
    })
    .catch((err) => {
      console.log(err);
    });
};

const redirectUserPage = (req, res) => {
  res.redirect("/users");
};

const renderUserCreatePage = (req, res) => {
  res.render("adduser", { title: "Add-User" });
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByName,
  createUser,
  updateUser,
  deleteUser,
  redirectUserPage,
  renderUserCreatePage,
};
