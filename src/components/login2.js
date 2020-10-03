import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './login2.css';

export default class Login extends Component {
  clicked(){
    alert("sucessful")
    window.location="./ride"
  }
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
     

      <div className="hero1" >
      
      <center>
       <h1>  <font color="purple"> UBER </font></h1><li>
      </li>

<h2><font color="purple">USER  BLOCKCHAIN  ENABLE  RIDE</font></h2><li>
      </li>

<h2><marquee behavior="scroll" direction="left" >/*Leave Sooner, Drive Slower, Live Longer */</marquee></h2><li>
      </li>
      
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large" style={{width:"400px"}}>
           <h2> <ControlLabel>Email</ControlLabel></h2>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large" style={{width:"400px"}}>
          <h2>  <ControlLabel>Password</ControlLabel></h2>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <li></li>
          
          <Button
          onClick={this.clicked}
            disabled={!this.validateForm()}
             type="submit">
            Login 
          </Button> 
        </form>
        </center>
      
      </div>
    
    );
  }
}