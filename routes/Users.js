const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const nodemailer = require("nodemailer");
users.use(cors());
process.env.SECRET_KEY = "secret";

users.post("/register", (req, res) => {
  console.log("${req.hostname} "+ `${req.hostname}`)
  let emailMSG;
  var email = req.body.email;
  var randomValue = Math.floor(Math.random() * 10000000 + 1);
  const today = new Date();
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today,
    verification: randomValue,
    active: "false",
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
              var transporter = nodemailer.createTransport({
                host: "s1.ct8.pl",
                port: 587,
                auth: {
                  user: "efaktura@rzi.ct8.pl",
                  pass: "Klucze2020!3",
                },
                //debug: true, // show debug output
                logger: true, // log information in console
              });
              transporter.verify(function (error, success) {
                if (error) {
                  console.log(error);
                } else {
                  console.log("Serwer gotowy na wysłnie emaila");
                }
              });
              var mailOption = {
                from: "efaktura@rzi.ct8.pl", // sender this is your email here
                to: `${email}`, // receiver email2
                subject: "Weryfikacja konta w serwisie efaktura (react)",
                html: `<h1>Cześć, kliknij na link <h1><br><p> Link aktywacyjny.</p>
                  <br><a href="http://localhost:3000/verification/?verify=${randomValue}&email=${email}">Kliknij aby aktywować twoje konto w serwisie efaktura.ct8.pl</a>`,
              };
              transporter.sendMail(mailOption, function (error, info) {
                if (error) {
                  console.log(error);
                  return;
                }
                console.log("Email sent: " + info.response);
                res.send({
                  msg:
                    "Email z linkiem do autoryzacji wysłany na twoją skrzynkę pocztową",
                });
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
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    if (user.active == "true") {
      if (user && bcrypt.compareSync(req.body.password, user.password)) {
        let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
          expiresIn: 1440,
        });
        res.send(token);
      } else {
        res.send({ msg: "Błędny użytkownik/hasło lub konto nie aktywowane" });
      }
    } else {
      res.send({ msg: "Błędny użytkownik/hasło lub konto nie aktywowane" });
    }
  });
});
users.get("/login", (req, res) => {
  //console.log("req.baseUrl "+req.baseUrl)
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
        res.send("Użytkownik nie istnieje");
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});
users.get("/verification", (req, res) => {
  console.log("req.body.email " + req.body.email);
  User.findOne({
    where: {
      email: req.query.email,
    },
  })
    //TODO bcrypt
    .then((user) => {
      console.log("user.verification " + user.verification);
      console.log("req.query.verify " + req.query.verify);
      if (user.verification == req.query.verify) {
        User.update({ active: "true" }, { where: { email: req.query.email } })
          .then((result) => {
            console.log("data was Updated");
            //res.redirect('/');
          })
          .catch((err) => {
            console.log("Error : ", err);
          });
      } else {
        res.json({ msg: "zły numer weryfikacyjny" });
      }
    });
  //res.json({"msg": "zakończona pomyślnie" });
});
users.post("/verification", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    //TODO bcrypt
    .then((user) => {
      if (user.verification == req.body.verify) {
        User.update({ active: "true" }, { where: { email: req.body.email } })
          .then((result) => {
            console.log("data was Updated");
            //res.redirect('/');
          })
          .catch((err) => {
            console.log("Error : ", err);
          });
      }
    });
  res.json({ msg: "zakończona pomyślnie" });
});
users.get("/reset", (req, res) => {
  console.log("jestem w reset get")
   res.redirect("/newpassword");
});
users.post("/reset", (req, res) => {
  console.log("jestem w reset posst")
  var email = req.body.email;
  console.log ("email: "+ email)

  var randomValue = Math.floor(Math.random() * 10000000 + 1);
  const today = new Date();
  const userData = {
    email: req.body.email,
  };

  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    //TODO bcrypt
    .then((user) => {
      if (user) {
        // send email for authoirsation
        var transporter = nodemailer.createTransport({
          host: "s1.ct8.pl",
          port: 587,
          auth: {
            user: "efaktura@rzi.ct8.pl",
            pass: "Klucze2020!3",
          },
          //debug: true, // show debug output
          logger: true, // log information in console
        });
        transporter.verify(function (error, success) {
          if (error) {
            console.log(error);
          } else {
            console.log("Serwer gotowy na wysłnie emaila");
          }
        });
        console.log("req.header('host') " + req.header("host"));
        
        var mailOption = {
          from: "efaktura@rzi.ct8.pl", // sender this is your email here
          to: `${email}`, // receiver email2
          subject: "Reset hasła w serwisie efaktura (react)",
          html: `<h1>Cześć, kliknij na link <h1><br><p> Link resetujący hasło.</p>
                <br><a href="http://localhost:3000/newpassword/?verify=${randomValue}&email=${email}">Kliknij aby zresetować hasło</a>`,
        };
        transporter.sendMail(mailOption, function (error, info) {
          if (error) {
            console.log(error);
            return;
          }
          console.log("Email sent: " + info.response);
          res.send({
            msg:
              "Email z linkiem do resetu hasła został wysłany na twoją skrzynkę pocztową",
          });
        });
      }else {
        res.send( "brak email")
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
    console.log (" wyjście z reset post");
});
users.get("/newpassword", (req, res) => {
  console.log("jestem w newpassword get");
  res.json({msg:"ok"})
});
users.post("/newpassword", (req, res) => {
  console.log("jestem w newpassword");
  var email = req.body.email;
  var verify = req.body.verify;
  var password = req.body.password;
  const userData = {
    email: req.body.email,
    verif: req.body.verify,
    password: req.body.password,
  };
  console.log(`${email}`)
  console.log(`${verify}`)
  console.log(`${password}`)
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    userData.password = hash;
    console.log(`${userData.password}`)
    User.update({ password: userData.password }, { where: { email: email } })
      .then((result) => {
        console.log("data was Updated");
        //res.redirect('/');
      })
      .catch((err) => {
      console.log("Error : ", err);
      });
  })
  res.send({
              msg:
                "Hasło zostało zmienione",
            });
});
users.post("/changepassword", (req, res) => {
  console.log("req.baseUrl " + req.baseUrl);
  var email = req.body.email;

  var randomValue = Math.floor(Math.random() * 10000000 + 1);
  const today = new Date();
  const userData = {
    email: req.body.email,
  };

  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    //TODO bcrypt
    .then((user) => {
      if (user) {
        // send email for authoirsation
        var transporter = nodemailer.createTransport({
          host: "s1.ct8.pl",
          port: 587,
          auth: {
            user: "efaktura@rzi.ct8.pl",
            pass: "Klucze2020!3",
          },
          //debug: true, // show debug output
          logger: true, // log information in console
        });
        transporter.verify(function (error, success) {
          if (error) {
            console.log(error);
          } else {
            console.log("Serwer gotowy na wysłnie emaila");
          }
        });
        var mailOption = {
          from: "efaktura@rzi.ct8.pl", // sender this is your email here
          to: `${email}`, // receiver email2
          subject: "Reset hasła w serwisie efaktura (react)",
          html: `<h1>Cześć, kliknij na link <h1><br><p> Link resetujący hasło.</p>
                <br><a href="http://${req.originalUrl}/?verify=${randomValue}&email=${email}">Kliknij aby zresetować hasło</a>`,
        };
        transporter.sendMail(mailOption, function (error, info) {
          if (error) {
            console.log(error);
            return;
          }
          console.log("Email sent: " + info.response);
          res.send({
            msg:
              "Email z linkiem do resetu hasła został wysłany na twoją skrzynkę pocztową",
          });
        });
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});
module.exports = users;
