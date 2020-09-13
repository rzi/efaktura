import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import Profile from './Profile'
class Admin extends Component {
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
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h2 className="text-center">Moduł Administracja</h2>
          {/* </div>
          <div className="col-sm-8 mx-auto"> */}
            <Profile/>
          </div>
        </div>
      </div>
    )
  }
}

export default Admin
