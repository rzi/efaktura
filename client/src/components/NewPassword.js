import React, { Component } from "react";
import { newpassword } from "./UserFunctions";
class NewPassword extends Component {
  constructor() {
    super();
    this.state = {
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

    const user = {
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    newpassword(user).then((res) => {
      document.getElementById("msg").textContent = res.msg;
      // if (res.msg === "Błędny użytkownik/hasło lub konto nie aktywowane") {
      //   localStorage.removeItem("usertoken");
      //   this.props.history.push(`/login`);
      // } else {
      //   this.props.history.push(`/profile`);
      // }
    });
  }
  componentDidMount() {
    console.log("jestem w did mount " + this.props.match.params.email);
    this.setState.email = "dddd";

    // document.getElementsByName("email").value = "this.props.match.params.email";
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Podaj nowe hasło</h1>
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
                Zmiana hasła
              </button>
            </form>
            <br />
            <p>
              Po zmianie hasła przejdź do logowaina
            </p>

            <br />
            <h4 id="msg"> </h4>
          </div>
        </div>
      </div>
    );
  }
}
export default NewPassword;
