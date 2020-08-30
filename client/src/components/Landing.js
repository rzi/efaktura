import React, { Component } from "react";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      password2: "",
      verify: "",
      errors: {},
    };
  }

  componentDidMount() {
    console.log("jestem w did mount  landing");
    var url = new URL(window.location.href); 
    var url2 = new URL(window.location); 
    console.log ("url "+ url)
    console.log ("url2 "+ url2)
    var msg = new URLSearchParams(url.search).get("msg");
    var email = new URLSearchParams(url2.search).get("email");
    console.log ("email "+ email)
    console.log ("msg "+ msg);
    if (msg=="newpassword") {
      console.log("jestem w did mount if landing ");
      this.props.history.push(`/newpassword/?email=${email}`);
    }
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h2 className="text-center">
              Witaj w efaktura, która napisana jest w technologji React + Express + MySQL
            </h2>
              <ol>
                <li>Zarejestruj się</li>
                <li>Aktywuj konto przez email</li>
                <li>Zaloguj się</li>
              </ol>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
