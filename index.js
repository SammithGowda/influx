const express = require("express");
const connect = require("./config/db");
const app = express();
app.use(express.json());

const items = require("./controller/item_controller");

app.use("/items", items);

const port = 4002;

const start = async () => {
  await connect();
  app.listen(port, () => {
    console.log(`listing port ${port}`);
  });
};

start();
