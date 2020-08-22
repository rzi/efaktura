import React, { Component } from "react";
import axios from "axios";

class Verification extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     email: "rzi@vp.pl",
  //     verify: "1234",
  //   };
  // }

  componentDidMount() {
    console.log("jestem w verification  na front");
    let verify = new URL(window.location.href).searchParams.get("verify");
    let email = new URL(window.location.href).searchParams.get("email");
    axios
      .post("/users/verification/", {
        verify: verify,
        email: email,
      })
      .then((response) => {
        console.log("verification post");
        console.log("response: " + response.data.msg);
        document.getElementById("msg").textContent = response.data.msg;
        //return response.data;
      });
    // this.props.history.push(`/verification`);
  }
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Aktywacja użytkownika</h1>
            <h2 id="msg" className="text-center">
              {" "}
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Verification;
