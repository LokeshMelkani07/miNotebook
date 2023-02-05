const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

// Create a user using: POST "/api/auth". It does not require authentication means no need for the user to logged in for this
router.post(
  "/createUser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password length must be min 5 letter").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // Using express validator for validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // checking whether user with same email exits already or not
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry, User with same email already exits" });
      }
      // If user with same email does not exits, create a user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      // give the user as a response
      res.json(user);
    } catch (err) {
      // catch the error if there
      console.log(err.message);
      // return server error status code
      res.status(500).send("Some error occured");
    }

    /*
    .
    then((user) => res.json(user))
    .catch((err) => {
      console.log("Error in user creation ", err);
      res.json({
        error: "Please enter a unique value for email",
        message: err.message,
      });
    });
    */
  }
);

module.exports = router;

/*
When a user log in
A jwt token is provided
and a hash is generated for the password
and data in mongodb is stored but password is stored in form of a hash
when user log in
hash is compared with the entered password and the hash of mongodb


*/
