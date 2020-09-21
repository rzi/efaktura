import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import UserView from "./UserView.js";
import jwt_decode from "jwt-decode";
import { Navbar, Nav } from "react-bootstrap";
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

  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/`);
  }
  
  render() {
    const loginRegLink = (
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/login">Logowanie</Nav.Link>
          <Nav.Link href="/register">Rejestracja</Nav.Link>
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
