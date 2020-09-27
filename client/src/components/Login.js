import React, { Component } from "react";
import { login } from "./UserFunctions";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmit2 = this.onSubmit2.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    login(user).then((res) => {
      document.getElementById("msg").textContent = res.msg;
      if (res.msg === "Błędny użytkownik/hasło lub konto nie aktywowane") {
        localStorage.removeItem("usertoken");
        this.props.history.push(`/login`);
      } else {
        // this.props.history.push(`/`);
        window.location.href = "/";
        
      }
    });
  }
  onSubmit2(e) {
    e.preventDefault();
    this.props.history.push(`/reset/?email=${this.state.email}`);  
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Logowanie</h1>
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
              <div className="form-group">
                <label htmlFor="password">Hasło</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="hasło"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Zaloguj!
              </button>
            </form>
            <br/>
            <form  onSubmit={this.onSubmit2}>
              <label >Zapomniałeś hasła? kliknij </label>
               <button
                  type="submit"
                  className="btn btn-link"                
                >
                  tutaj
               </button>
              </form>
            {/* <br /> */}
            <h5 className="alert alert-light" role="alert" id="msg"> </h5>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
