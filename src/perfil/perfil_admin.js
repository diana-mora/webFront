import React from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import {Tabs, Col, Tab, ButtonToolbar, Button, FormGroup, FormControl, ControlLabel, Alert} from 'react-bootstrap'
import usuario from '../usuario';
import NewAdmin from '../NewAdmin/NewAdmin';//admin puede crear nuevo tipo_usuario
import NewMesa from '../mesa/NewMesa'//admin puede crear mesa


export default class perfil_admin extends React.Component { //tipo_usuario: admin
    /*state = {
    rut: "",
    tipo_usuario: "",
    nombre: "",
    apellido: "",
    email: "",
    password: ""*/
    constructor(props){
      super(props);
      this.state = {
        rut: props.rut,
        tipo_usuario: props.tipo_usuario,
        nombre: props.nombre,
        apellido: props.apellido,
        email: props.email,
        password: props.password,
    }
  };

render (){
     const {rut, tipo_usuario, nombre, apellido, email} = this.state;
  return (
    <div>
    <p>
   <h1 className="App-title">Bienvenido a Easy Table</h1>
       {rut}<br/>
       {tipo_usuario}<br/>
       {nombre}<br/>
       {apellido}<br/>
       {email}<br/>
   </p>
</div>



  );
}
}
