import React, { Component } from "react";
import axios from "axios";

class NewPasswordView extends Component {

//   componentDidMount() {
//     let verify = new URL(window.location.href).searchParams.get("verify");
//     let email = new URL(window.location.href).searchParams.get("email");
//     axios
//       .post("/users/verification/", {
//         verify: verify,
//         email: email,
//       })
//       .then((response) => {
//         document.getElementById("msg").textContent = response.data.msg;
//         //return response.data;
//       });
//   }
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Hasło zostało zmienione</h1>
            <h2 id="msg" className="text-center"></h2>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPasswordView;
