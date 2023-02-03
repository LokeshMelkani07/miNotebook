const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  obj = {
    note: "lokesh come home",
    description: "i am busy",
  };
  res.json(obj);
});

module.exports = router;
