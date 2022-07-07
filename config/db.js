const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://influx:influx@cluster0.1iivi.mongodb.net/?retryWrites=true&w=majority"
  );
};
module.exports = connect;
