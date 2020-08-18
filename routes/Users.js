const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const { emailer } = require("../server/emailer");
users.use(cors());

process.env.SECRET_KEY = "secret";

users.post("/register", (req, res) => {
  console.log("jestem w post register");
  const today = new Date();
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today,
  };

  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    //TODO bcrypt
    .then((user) => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;
          User.create(userData)
            .then((user) => {
              // send email for authoirsation
              //console.log("emailer : " + emailer);
              var emailerMsg = emailer("rzi@vp.pl");
              res.json({
                status: user.email + " Registered!" + emailerMsg,
              });
            })
            .catch((err) => {
              res.send("error: " + err);
            });
        });
      } else {
        res.send({ msg: "Użytkownik już istnieje" });
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

users.post("/login", (req, res) => {
  console.log("jestem w login");
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
        expiresIn: 1440,
      });
      res.send(token);
    } else {
      res.send({ msg: "Błędny użytkownik lub hasło" });
    }
  });
});

users.get("/profile", (req, res) => {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );

  User.findOne({
    where: {
      id: decoded.id,
    },
  })
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.send("User does not exist");
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

module.exports = users;
