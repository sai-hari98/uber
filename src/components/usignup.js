import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./usignup.css";
export default class Signup extends Component {
  clicked(){
    alert("sucessful")
  }
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      cnp:"",
      phoneno: "",
      address: ""
    };
  }
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0 && this.state.cnp.length>0  && this.state.phoneno.length>0 &&  this.state.address.length > 0;
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  handleSubmit = event => {
    event.preventDefault();
  }

  onsubmit(e) {
  e.preventDefault();
  console.log(this.state.password);
  let data = []; 
  data.push('email='+this.state.email);
  data.push('password='+this.state.password);
  data.push('cnp='+this.state.cnp);
  data.push('phoneno='+this.state.phoneno);
  data.push('adrs='+this.state.adrs);
  
  data = data.join('&');
  fetch('/postform2',
  {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type' : 'application/x-www-form-urlencoded'
    },
  body : data
})
  .then((data) => {
    return(data.json());
  })
  .then((result) => {
    alert("successful")
    window.location = "/ride";
    //this.props.history.push('/sal');
    //this.props.history.push({
     // state: {
       // id:12
     // pathname: './ride',
      //}
   // });
    console.log(result);
  })
}

  render() {
    return (
      <div className="hero4">
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
          <FormGroup controlId="cnp" bsSize="large" style={{width:"400px"}}>
          <h2>  <ControlLabel>Confirm-password</ControlLabel></h2>
            <FormControl
              value={this.state.cnp}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <FormGroup controlId="phoneno" bsSize="large" style={{width:"400px"}}>
          <h2>  <ControlLabel>phone-no</ControlLabel></h2>
            <FormControl
              value={this.state.phoneno}
              onChange={this.handleChange}
              type="phoneno"
            />
          </FormGroup>
		  <FormGroup controlId="adrs" bsSize="large" style={{width:"400px"}}>
          <h2>  <ControlLabel>phone-no</ControlLabel></h2>
            <FormControl
              value={this.state.adrs}
              onChange={this.handleChange}
              type="adrs"
            />
          </FormGroup>
          <Button
            onClick= {(e)=> this.onsubmit(e)}
            disabled={!this.validateForm()}
            type="submit">
            Signup 
          </Button> 
        </form>
        </center>
      </div>
    );
  }
}