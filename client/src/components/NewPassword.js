import React, { Component } from "react";
import { newpassword } from "./UserFunctions";
class NewPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      password2: "",
      verify: "",
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
      email: localStorage.getItem('email'),
      password: this.state.password,
      password2: this.state.password2,
      verify: localStorage.getItem('verify'),
    };

    newpassword(user).then((res) => {
      // if(res.msg =='undefined'){
      //   return
      // }else {   
      //   document.getElementById("msg").textContent = res.msg;
      //     localStorage.clear();
      //     if (res.msg === "ok") {
      //       localStorage.removeItem("usertoken");
      //       this.props.history.push(`/login`);
      //     } else if (res.msg === "Hasło zostało zmienione"){
      //         document.getElementById("msg").textContent = res.msg;
      //         //this.props.history.push(`/login`);
      //     } else if(res.msg ==undefined){
      //         return
      //     } else {
      //       this.props.history.push(`/login`);
      //     }
      // }
      this.props.history.push(`/newpasswordview`);
    });
      
  }
  componentDidMount() {
    console.log("jestem w did mount newpassword");
    var url = new URL(window.location.href); 
    var verify = new URLSearchParams(url.search).get("verify");
    console.log ("verif "+ verify)

    var email = new URLSearchParams(url.search).get("email");
    console.log ("email "+email)

    localStorage.setItem('email', email);
    localStorage.setItem('verify', verify);

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
