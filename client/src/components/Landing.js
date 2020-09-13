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
    var url = new URL(window.location.href); 
    var url2 = new URL(window.location); 
    var msg = new URLSearchParams(url.search).get("msg");
    var email = new URLSearchParams(url2.search).get("email");
    if (msg==="newpassword") {
      this.props.history.push(`/newpassword/?email=${email}`);
    } else if(msg==="touseractivated"){
      this.props.history.push(`/useractivated`);
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
