const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser : true
});

const db = mongoose.connection;

db.on("error", error => {
  console.error(error);
});

db.once("open", () => {
  console.log("Connection Successful");
});

module.exports = db;