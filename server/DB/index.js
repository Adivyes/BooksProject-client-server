const mongoose = require("mongoose");
const dbConnection = "mongodb://127.0.0.1:27017/books"
mongoose
.connect(dbConnection)
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;