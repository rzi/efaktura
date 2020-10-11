import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import UserView from "./UserView.js";
import jwt_decode from "jwt-decode";
import { Navbar, Nav} from "react-bootstrap";
//import Navbar from 'react-bootstrap/Navbar'
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
    // this.props.history.push(`/`);
    window.location.href = "/";
  }
  
  render() {
    const loginRegLink = (
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Navbar.Link href="/login">Logowanie</Navbar.Link>
          <Navbar.Link href="/register">Rejestracja</Navbar.Link>
        </Nav>
        <Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Użytkownik:{" "}
              <UserView
                first_name={this.state.first_name}
                last_name={this.state.last_name}
              />
            </Navbar.Text>
          </Navbar.Collapse>
        </Nav>
      </Navbar.Collapse>
      
    );
    const userLink = (
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/invoice">Moduł Fakturowania</Nav.Link>
          <Nav.Link href="/admin">Moduł Administracja</Nav.Link>
          <Nav.Link
            href="/"
            onClick={this.logOut.bind(this)}
            className="nav-link"
          >
            Wylogowaine
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Collapse className="justify-content-end">
            <Nav.Text>
              Użytkownik:{" "}
              <UserView
                first_name={this.state.first_name}
                last_name={this.state.last_name}
              />
            </Nav.Text>
          </Nav.Collapse>
        </Nav>
      </Navbar.Collapse>
     

    );
    return (
      <div className="container rounded">
        <Navbar
          className=" rounded"
          bg="dark"
          variant="dark"
          expand="lg"
          sticky="top"
        >
          <Navbar.Brand href="/">Strona główna</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {localStorage.usertoken ? userLink : loginRegLink}
        </Navbar>
      </div>
    );
  }
}
export default withRouter(Landing);
