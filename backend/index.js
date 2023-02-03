const express = require("express");
const app = express();
const connectToMongo = require("./db");
connectToMongo();

const PORT = 3000;

// Available routes coming from routes folder
// we will use app.use to use our routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.get("/", (req, res) => {
  res.send("Hello Lokesh");
});

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
