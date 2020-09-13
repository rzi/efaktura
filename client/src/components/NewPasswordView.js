import React, { Component } from "react";
class NewPasswordView extends Component {

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Hasło zostało zmienione</h1>
            <h2 id="msg" className="text-center"> </h2>
          </div>
        </div>
      </div>
    );
  }
}
export default NewPasswordView;