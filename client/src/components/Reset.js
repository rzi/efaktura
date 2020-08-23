import React, { Component } from "react";
import { reset } from "./UserFunctions";
class Reset extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
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
    };

    reset(user).then((res) => {
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
              <h1 className="h3 mb-3 font-weight-normal">Reset hasła</h1>
              <div className="form-group">
                <label htmlFor="email">Podaj adres email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Reset
              </button>
            </form>
            <br />
            <p>
              Po nacisnięciu reset, link do zmiany hasła zostanie wysłany na
              twoją skrzynkę pocztową
            </p>

            <br />
            <h4 id="msg"> </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Reset;