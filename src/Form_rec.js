import React from 'react';
import ReactDOM from 'react-dom';
import {Tabs, Col, Tab, ButtonToolbar, Button, FormGroup, FormControl, ControlLabel, Alert} from 'react-bootstrap'
import Form from "./Form";


export default class recuperar extends React.Component{
  state = {
    rut: "",
    email:""
  };

  onLoginSubmit(event) {
    event.preventDefault()
    const { rut, email } = this.state
    if (rut && email) { //verificar que existe user
      this.props.auth.login(rut, email)
        .then(result => {
          if (!result.token) {
            this.setState({loginError: result.message})
            return
          }
          this.props.auth.finishAuthentication(result.token)
          this.context.router.push('/usuario')
        })
    }
  }


    onSubmitCrear = (fields)=>{
      console.log("Form",fields);
    }
    onSubmit = (fields)=>{
    console.log("App", fields);
  }

  Recuperar() {
      fetch('http://localhost:5555/')
          .then(response => response.json())
          .then(responseJSON => {
              console.log("Form", responseJSON);
              this.setState({
                  usuario: responseJSON.data
              });
          })
          .catch(error => {
              console.log(':(', error);
          })
      //
  }

render(){
  return(
    <div class="Iniciarsesion">
      <form action_page="./Form" method="post">
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
      <button type="onLoginSubmit" class="btn btn-primary btn-block btn-large">Enviar</button>
      </form>
      <br />
</div>
);
}
}
