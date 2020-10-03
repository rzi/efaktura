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
import jwt_decode from "jwt-decode";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
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