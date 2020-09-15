import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

class Profile extends Component {
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


   render(){
    return (
      <div>
        <Tabs defaultActiveKey="profile" transition={false} id="noanim-tab-example">
          <Tab eventKey="profile" title="Profil użytkownika">
             
             <div className="col-sm-8 mx-auto">
               <br/>
                <h3 className="text-center">Twój profil</h3>
             </div>
             <div className="tab-content">
              <table className="table col-md-6 mx-auto">
                <tbody>
                  <tr>
                        <td>Imię</td>
                        <td>{this.state.first_name}</td>
                        <td><button >Edycja</button></td>
                        <td><button >Zapisz</button></td>
                      </tr>
                  <tr>
                        <td>Nazwisko</td>
                        <td>{this.state.last_name}</td>
                        <td><button >Edycja</button></td>
                        <td><button >Zapisz</button></td>
                      </tr>
                  <tr>
                        <td>Email</td>
                        <td>{this.state.email}</td>
                      </tr>
                </tbody>
              </table>
             </div>  
          </Tab>
          <Tab eventKey="invoice" title="Dane do faktur">
          <br/>
          <h3 className="text-center">Twoje dane do fakturowania</h3>
          </Tab>
          <Tab eventKey="settings" title="Ustawiena" >
          <br/>
          <h3 className="text-center">Twoje ustawienia </h3>
          </Tab>
        </Tabs>
      </div>
    )  
   } 

}
export default Profile
