const Image = require("../models/image");

// Create image and comment
const AddImage = async (req, res) => {
  try {
    const { comment } = req.body;
    const imagePath = req.file ? req.file.filename : "";

    const image = new Image({ imagePath, comment });
    await image.save();

    res.status(201).json(image);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get all images and comments
const getImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { AddImage, getImages };
