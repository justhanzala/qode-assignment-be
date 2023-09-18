const mongoose = require("mongoose");

const ConnectToMongoDB = () => {
  const MongoURI =
    "mongodb+srv://qode-user:qode-user@cluster0.ibnqj.mongodb.net/qode_assignment";
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
