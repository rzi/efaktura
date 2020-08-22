import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h2 className="text-center">
              Witaj w efaktura napisana w technologji React+Express+MSQL
            </h2>
            <p>
              <ol>
                <li>Zarejestruj się</li>
                <li>Aktywuj konto przez email</li>
                <li>Zaloguj się</li>
              </ol>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
