import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Verification from "./components/Verification.js";
import Invoice from "./components/Invoice.js";
import Admin from "./components/Admin.js";
import Reset from "./components/Reset.js";
import NewPassword from "./components/NewPassword.js";
import ChangePassword from "./components/ChangePassword.js";
import NewPasswordView from "./components/NewPasswordView.js";
import UserActivated from "./components/UserActivated.js";
// import UserView from "./components/UserView.js";
import jwt_decode from "jwt-decode";
class App extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      errors: {},
    };
  }
  componentDidMount() {
    var token = localStorage.usertoken;
    console.log(`DID nav token ${token}`);
    if (localStorage.usertoken === undefined) {
      console.log(`DID jestem w if `);
      // localStorage.setItem("usertoken", "");
      return;
    } else {
      console.log(`DID jestem w else `);
      const token = localStorage.usertoken;
      const decoded = jwt_decode(token);

      console.log(`DID decoded2 ${decoded}`);
      console.log(`DID decoded.first_name ${decoded.first_name}`);
      this.setState({
        first_name: decoded.first_name,
        last_name: decoded.last_name,
        email: decoded.email,
      });
    }
  }
  componentWillMount() {
    var token = localStorage.usertoken;
    console.log(`WILL nav token ${token}`);
    if (localStorage.usertoken === undefined) {
      console.log(`WILL jestem w if `);
      // localStorage.setItem("usertoken", "");
      return;
    } else {
      console.log(`WILL jestem w else `);
      const token = localStorage.usertoken;
      const decoded = jwt_decode(token);

      console.log(`WILL decoded2 ${decoded}`);
      console.log(`WILL decoded.first_name ${decoded.first_name}`);
      this.setState({
        first_name: decoded.first_name,
        last_name: decoded.last_name,
        email: decoded.email,
      });
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar first_name={this.state.first_name} last_name={this.state.last_name  }/>
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/verification" component={Verification} />
            <Route exact path="/invoice" component={Invoice} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/reset" component={Reset} />
            <Route exact path="/newpassword" component={NewPassword} />
            <Route exact path="/changepassword" component={ChangePassword} />
            <Route exact path="/newpasswordview" component={NewPasswordView} />
            <Route exact path="/useractivated" component={UserActivated} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;