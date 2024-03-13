const Apartment = require("../models/apartment");

const getAllApartments = (req, res) => {
  console.log("get all apartments");
  Apartment.find({ property_type: "Apartment" })
    .then((apartments) => {
      console.log(apartments);
      res.send(apartments);
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

module.exports = {
  getAllApartments,
};
