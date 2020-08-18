module.exports.emailer = function (email) {
  const nodemailer = require("nodemailer");
  console.log("req: " + email);
  var emailMSG = "";

  var randomValue = Math.floor(Math.random() * 10000000 + 1);

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
      console.log("Server is ready to take our messages");
    }
  });

  var mailOption = {
    from: "efaktura@rzi.ct8.pl", // sender this is your email here
    to: `${email}`, // receiver email2
    subject: "Weryfikacja konta w serwisie efaktura (react)",
    html: `<h1>Cześć, kliknij na link <h1><br><p> Link aktywacyjny.</p>
      <br><a href="http://localhost:3000/verification/?verify=${randomValue}&email=${email}">Kliknij aby aktywować twoje konto w serwisie efaktura.ct8.pl</a>`,
  };

  // async function asyncCall1() {
  //   console.log("calling");

  //   const result = await transporter.sendMail(mailOption, (error, info) => {
  //     console.log(info.response);
  //     emailMSG = info.response;
  //     if (error) {
  //       console.log(error);
  //       // res.json({ msg: error.response });
  //     }
  //   });
  //   console.log(result);
  //   // expected output: "resolved"
  //   return emailMSG;
  // }
  //console.log(asyncCall1());

  // function resolveAfter2Seconds() {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve("resolved");
  //     }, 2000);
  //   });
  // }

  async function asyncCall() {
    console.log("calling");
    const result = await mymailer();
    console.log(result);

    //console.log("emailMSG: " + emailMSG);
    // expected output: "resolved"
  }

  function mymailer() {
    return new Promise((resolve) => {
      transporter.sendMail(mailOption, (error, info) => {
        console.log(info.response);
        emailMSG = info.response;
        if (error) {
          console.log(error);
          // res.json({ msg: error.response });
        }
      });
    });
  }
  
  asyncCall();
};
