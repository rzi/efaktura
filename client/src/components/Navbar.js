import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
//import UserView from "./UserView.js";
import jwt_decode from "jwt-decode";
import UserView from "./UserView";

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
  componentDidMount() {
    var token = localStorage.usertoken;
    console.log(`DID nav token ${token}`);
    if (localStorage.usertoken === undefined) {
      console.log(`DID jestem w if `);
      // localStorage.setItem("usertoken", "");
      return
    } else {
      console.log(`DID jestem w else `);
      const token = localStorage.usertoken;
      const decoded = jwt_decode(token)

      console.log(`DID decoded2 ${decoded}`);
      console.log(`DID decoded.first_name ${decoded.first_name}`);
      this.setState({
        first_name: decoded.first_name,
        last_name: decoded.last_name,
        email: decoded.email,
      });
    };
  }
  componentWillMount() {
    var token = localStorage.usertoken;
    console.log(`WILL nav token ${token}`);
    if (localStorage.usertoken === undefined) {
      console.log(`WILL jestem w if `);
      // localStorage.setItem("usertoken", "");
      return
    } else {
      console.log(`WILL jestem w else `);
      const token = localStorage.usertoken;
      const decoded = jwt_decode(token)

      console.log(`WILL decoded2 ${decoded}`);
      console.log(`WILL decoded.first_name ${decoded.first_name}`);
      this.setState({
        first_name: decoded.first_name,
        last_name: decoded.last_name,
        email: decoded.email,
      });
    };
  }

  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/`);
  }

  render() {
    const loginRegLink = (
      <div className="justify-content-md-center">
        <ul className="navbar-nav ">
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

        <ul className="navbar-nav ">
          <li className="nav-item ">
            <div className=" navbar-right nav-link text-light text-right"> Witaj
    <UserView />
            </div>
          </li>
        </ul>
      </div>


      //  { <ul class="navbar-nav mr-auto ">
      //     <li class="nav-item ">
      //       <a class="nav-link" href="#">Home</a>
      //     </li>
      //     <li class="nav-item">
      //       <a class="nav-link" href="#">Features</a>
      //     </li>
      //     <li class="nav-item">
      //       <a class="nav-link" href="#">Pricing</a>
      //     </li>
      //   </ul>
      //   <ul class="navbar-nav ">
      //     <li class="nav-item ">
      //       <a class="nav-link" href="">Login</a>
      //     </li>
      //     <li class="nav-item">
      //       <a class="nav-link" href="">Register</a>
      //     </li>
      //   </ul>
      // </div>
      // </div>
    );



    const userLink = (
      <div>
        <ul className="navbar-nav  mr-auto">
          <li className="nav-item">
            <Link to="/invoice" className="nav-link">
              Faktura
          </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin" className="nav-link">
              Administracja
          </Link>
          </li>
          <li className="nav-item">
            <a href="" onClick={this.logOut.bind(this)} className="nav-link">
              Wylogowaine
          </a>
          </li>
          <div className=" navbar-nav nav-link nav-item text-light text-right"> Witaj
            <UserView />
          </div>
        </ul>

      </div>
    );

    return (
      <div>
        {/* <nav class="navbar navbar-expand-md navbar-light bg-light"></nav> */}
        <nav className="navbar navbar-expand-md  navbar-dark bg-dark rounded">
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
            className="collapse navbar-collapse "
            id="navbarsExample10"
          >
            <ul className="navbar-nav mr-auto" >
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Strona główna
              </Link>
              </li>
            </ul>
            {
              localStorage.usertoken ? userLink : loginRegLink
            }

          </div>

        </nav>
        {/* <div >
          <nav class="navbar navbar-expand-md ">

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item ">
                  <a class="nav-link" href="#">Home </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
              </ul>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="">Login</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">Register</a>
                </li>
              </ul>
            </div>
          </nav>
        </div> */}
      </div>

    );
  }
}
export default withRouter(Landing);
