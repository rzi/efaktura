import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class UserView extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email
    })
  }

  render() {
    return (
             
       <span> 
          <span> {this.state.first_name} </span> 
          <span> { }</span>
          <span> { this.state.last_name}</span> 
        </span>
    )
  }
}
export default UserView
