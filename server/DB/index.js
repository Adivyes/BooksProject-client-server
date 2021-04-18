const mongoose = require("mongoose");

const dbConnection = process.env.DB
mongoose
.connect(dbConnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;