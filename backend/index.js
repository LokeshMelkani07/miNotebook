const express = require("express");
const app = express();
const connectToMongo = require("./db");
connectToMongo();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello Lokesh");
});

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
