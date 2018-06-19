import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import {Tabs, Col, Tab, ButtonToolbar, Button, FormGroup, FormControl, ControlLabel, Alert} from 'react-bootstrap'
import Form from "./Form";
import usuario from './usuario';
//import {Tabs, Col, Tab, ButtonToolbar, Button, FormGroup, FormControl, ControlLabel, Alert} from 'react-bootstrap'
//import AuthService from 'utils/AuthService'
//import styles from './styles.module.css'

export default class recuperar extends React.Component{
  state = {
    rut: "",
    email:""
  };

  onRecuperarSubmit(event) {
    event.preventDefault()
    const { rut, email } = this.state
    if (rut && email) { //verificar que existe user
      this.props.auth.login(rut, email)
      fetch('http://localhost:5555/usuario')
        .then(result => {
          if (!result.token) {
            this.setState({loginError: result.message})
            return
          }
          this.props.auth.finishAuthentication(result.token)
          this.context.router.push('/usuario') //agregar usuario
        })
    }
  }

render(){
  return(
    <div class="Iniciarsesion">
      <form action_page= "./Form" method="post">
      <h2> Recuperar contraseña </h2>

  <br />
       RUT <input type ="text"
      placeholder="12345678-9" required="required"
      value={this.state.rut}
      onChange={e => this.setState({rut: e.target.value})}/>

  <br />
  <br />
      EMAIL <input type ="email"
      placeholder="email@dom" required="required"
      value={this.state.email}
      onChange={e => this.setState({email: e.target.value})}/>
      <br /> <br /> <br />
      <button type="onRecuperarSubmit" class="btn btn-primary btn-block btn-large">Continuar</button>
      </form>
      <br />
</div>
);
}
}
