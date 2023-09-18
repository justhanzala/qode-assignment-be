const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
const ConnectToMongoDB = require("./config/db");
ConnectToMongoDB();

// Routers
const images = require("./api/routes/images");

app.use(express.json());
app.use(cors());

// Make uploads static
app.use(express.static("uploads/"));
app.use("/uploads/", express.static("uploads/"));

// Define API routes
app.use("/api", images);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
