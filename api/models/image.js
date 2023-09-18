const mongoose = require("mongoose");

// Create a Mongoose model for your data (Image and Comment)
const Image = mongoose.model("Image", {
  imagePath: String,
  comment: String,
});

module.exports = Image;
