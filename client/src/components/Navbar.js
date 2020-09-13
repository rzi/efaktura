import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import  UserView from "./UserView.js";

class Landing extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/`);
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
          {/* <Link to="/profile" className="nav-link">
            Użytkownik
          </Link> */}
        </li>
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
      </ul> 
      
    );

    return (
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Strona główna
              </Link>
            </li>
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}
         
        </div>
        <div className="text-light text-right"> Witaj <UserView/></div>
      </nav>
      
    );
  }
}
export default withRouter(Landing);
