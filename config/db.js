const mongoose = require("mongoose");

const ConnectToMongoDB = () => {
  const MongoURI = process.env.MONGO_URI;
  mongoose
    .connect(MongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB Connection Successfully!");
    })
    .catch((err) => console.log(`Error ${err}`));
};

module.exports = ConnectToMongoDB;
