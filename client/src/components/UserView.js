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

  mydecoded = function () {
    const token = localStorage.usertoken;
    console.log(`token ${token}`);
    const decoded = jwt_decode(token);
    console.log(`decoded ${decoded}`);
    console.log(`decoded.first_name ${decoded.first_name}`);
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email,
    });
  } 
  componentWillMount() {
    // const token = localStorage.usertoken;
    // console.log(`token ${token}`);
    // if (localStorage.usertoken.length >0) {
    //   const token = localStorage.usertoken;
    //   const decoded = jwt_decode(token);
    //   console.log(`decoded ${decoded}`);
    //   console.log(`decoded.first_name ${decoded.first_name}`);
    //   this.setState({
    //     first_name: decoded.first_name,
    //     last_name: decoded.last_name,
    //     email: decoded.email,
    //   });
    // }
    //this.mydecoded();
  }
  render() {
    return (
      <span>
        <span> {this.props.first_name} </span>
        <span> {}</span>
        <span> {this.props.last_name}</span>
      </span>
    );
  }
}
export default UserView;
