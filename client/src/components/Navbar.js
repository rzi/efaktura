import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import UserView from "./UserView.js";
import jwt_decode from "jwt-decode";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      errors: {},
    };
  }

  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    window.location.href = "/";
  }
  componentDidMount() {
    const token = localStorage.usertoken;
    console.log(`token ${token}`);
    console.log(`localStorage.usertoken ${localStorage.usertoken}`);

    if (token === undefined) {
      console.log(` did if`);
      this.setState({
        first_name: "",
        last_name: "",
        email: "",
      });
    } else {
      console.log(` did else`);
      const token = localStorage.usertoken;
      const decoded = jwt_decode(token);
      console.log(`decoded ${decoded}`);
      console.log(`decoded.first_name ${decoded.first_name}`);
      this.setState({
        first_name: decoded.first_name,
        last_name: decoded.last_name,
        email: decoded.email,
      });
    }
  }
  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Logownie
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Rejestracja
          </Link>
        </li>
      </ul>
    );

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/invoice" className="nav-link">
            Faktura
          </Link>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            data-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Administracja
          </a>
          <div class="dropdown-menu">
            <li>
              <Link to="/profile" className=" dropdown-item ">
                Użytkownik
              </Link>
            </li>

            <a class="dropdown-item" href="#">
              Another action
            </a>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              Separated link
            </a>
          </div>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Wylogowaine
          </a>
        </li>
      </ul>
    );
    return (
      <div className="container rounded">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample10"
            aria-controls="navbarsExample10"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse justify-content-md-center"
            id="navbarsExample10"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link to="/" className="nav-link navbar-brand">
                  Strona główna
                </Link>
              </li>
            </ul>
            {localStorage.usertoken ? userLink : loginRegLink}
          </div>
          <div className=" nav navbar-nav navbar-dark navbar-collapse">
            <ul className="nav navbar-nav navbar-dark navbar-right">
              <li className="nav-item nav-link">
                Użytkownik:{" "}
                <UserView
                  first_name={this.state.first_name}
                  last_name={this.state.last_name}
                />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default withRouter(Landing);
