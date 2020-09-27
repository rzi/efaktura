import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import {Button} from "react-bootstrap";
class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      btnIsDiasebled : true,
      errors: {}
    }
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email,
      btnIsDiasebled : true,
    })
  }
  onChangeFirstName(e){
    this.setState({
      first_name: e.target.value
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
                        <td><input type="text" value={this.state.first_name} onChange={this.onChangeFirst_name} /></td>
                        <td><Button className="Button" variant="secondary">Edycja</Button></td>
                        <td>{ this.state.btnIsDiasebled && <Button className="Button" variant="primary" >Zapisz</Button> }</td>
                      </tr>
                  <tr>
                        <td>Nazwisko</td>
                        <td>{ this.state.btnIsDiasebled && <input type="text" value={this.state.last_name} onClick={this.onClick} />}</td>
                        <td> <Button className="Button" variant="secondary">Edycja</Button></td>
                        <td>{ this.state.btnIsDiasebled && <Button className="Button" variant="primary" >Zapisz</Button> }</td>
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