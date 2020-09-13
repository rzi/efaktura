import React, { Component } from "react";
import { register } from "./UserFunctions";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    if (!(newUser.password === newUser.password2)) {
      return (document.getElementById("msg").textContent =
        "Hasła muszą być identyczne");
    }
    if (!(newUser.first_name && newUser.last_name && newUser.email && newUser.password2 && newUser.password2 )) {
      return (document.getElementById("msg").textContent =
        "Wprodadź dane we wszystkie pola");
    }

    register(newUser).then((res) => {
      if (res.msg) {
        document.getElementById("msg").textContent = res.msg;
        console.log("res.msg: " + res.msg);
      } else {
        document.getElementById("msg").textContent =
          "Proces rejestracji zakończony. Przejdź do logowania!";
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Rejestracja</h1>
              <div className="form-group">
                <label htmlFor="name">Imię</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="wprowadź imię"
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Nazwisko</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="wprowadź nazwisko"
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="wprowadź email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Hasło</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="wprowadź hasło"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password2">Powtórz hasło</label>
                <input
                  type="password"
                  className="form-control"
                  name="password2"
                  placeholder="wprowadź hasło"
                  value={this.state.password2}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Zarejestruj
              </button>
            </form>
            <br />
            <h5 className="alert alert-light" role="alert" id="msg"> </h5>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
