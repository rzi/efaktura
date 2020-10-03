import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Button } from "react-bootstrap";
import axios from "axios";
class Profile extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      btnIsDiasebled: true,
      errors: {},
      value: "",
    };
    this.handleChangeFirst_name = this.handleChangeFirst_name.bind(this);
    this.handleChangeLast_name = this.handleChangeLast_name.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email,
      btnIsDiasebled: true,
    });
  }

  handleChangeFirst_name(event) {
    this.setState({ first_name: event.target.value });
  }
  handleChangeLast_name(event) {
    this.setState({ last_name: event.target.value });
  }

  handleSubmit(event) {
    axios
      .put("/users/update", {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
      })
      .then((response) => {
        console.log("Dane użytkownika uaktualnione");
        localStorage.removeItem("usertoken");
        window.location.href = "/login";
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Tabs
          defaultActiveKey="profile"
          transition={false}
          id="noanim-tab-example"
        >
          <Tab eventKey="profile" title="Profil użytkownika">
            <div className="col-sm-8 mx-auto">
              <br />
              <h3 className="text-center">Twój profil</h3>
            </div>
            <div className="tab-content">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>
                    Email:                  </label>
                    <input type="text" value={this.state.email} readOnly className="form-control-plaintext" />

                </div>
                <div className="form-group">
                  <label>
                    Imię:
                    <br />
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.first_name}
                      onChange={this.handleChangeFirst_name}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    Nazwisko:
                    <br />
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.last_name}
                      onChange={this.handleChangeLast_name}
                    />
                  </label>
                </div>
                <input
                  className="btn btn-secondary"
                  type="submit"
                  value="Uaktualnij"
                />
              </form>
            </div>
          </Tab>
          <Tab eventKey="invoice" title="Dane do faktur">
            <br />
            <h3 className="text-center">Twoje dane do fakturowania</h3>
          </Tab>
          <Tab eventKey="settings" title="Ustawiena">
            <br />
            <h3 className="text-center">Twoje ustawienia </h3>
          </Tab>
        </Tabs>
      </div>
    );
  }
}
export default Profile;
