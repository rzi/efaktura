import React, { Component } from "react";
import jwt_decode from "jwt-decode";

class UserView extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      errors: {},
    };
  }
  // componentDidMount() {
  //   const token = localStorage.usertoken;
  //   console.log(` user token ${token}`);
  //   if (localStorage.usertoken == "undefined") {
  //     localStorage.setItem("usertoken", "");
  //     this.state = {
  //       first_name: "",
  //       last_name: "",
  //       email: "",
  //       errors: {},
  //     };
       
  //   }else{
  //     const token = localStorage.usertoken;
  //     const decoded = jwt_decode(token);
  //     console.log(`decoded ${decoded}`);
  //     console.log(`decoded.first_name ${decoded.first_name}`);
  //     this.setState({
  //       first_name: decoded.first_name,
  //       last_name: decoded.last_name,
  //       email: decoded.email,
  //     });
  //   }
  // }
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
  render() {
    return (
      <span>
        <span> {this.state.first_name} </span>
        <span> {}</span>
        <span> {this.state.last_name}</span>
      </span>
    );
  }
}
export default UserView;
