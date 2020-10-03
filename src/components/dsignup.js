import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./dsignup.css";
export default class Signup extends Component
{
  clicked()
  {
    alert("sucessful")
  }
  constructor(props)
  {
    super(props);
    this.state =
    {
      name: "",
      carNo: "",
      licNo: "",
      aadharNo: "",
      mobNo: "",
      pswd: "",
      rpswd: ""
    };
  }
  /*
    name
    carNo
    licNo
    aadharNo
    mobNo
    pswd
  */
  validateForm()
  {
    return this.state.pswd === this.state.rpswd;
    // return this.state.email.length > 0 && this.state.password.length > 0 && this.state.cnp.length>0  && this.state.phoneno.length>0 &&  this.state.name.length > 0 &&  this.state.from.length > 0 &&  this.state.To.length > 0 &&  this.state.cost.length > 0;
  }

  onsubmit(e)
  {
    e.preventDefault();
    console.log(this.state.password);
    let data = []; 
    data.push('name='+this.state.name);
    data.push('carNo='+this.state.carNo);
    data.push('licNo='+this.state.licNo);
    data.push('aadharNo='+this.state.aadharNo);
    data.push('mobNo='+this.state.mobNo);
    data.push('pswd='+this.state.pswd);
    
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
      if(result.code === 200)
        {
          alert("successful");
          window.location = "/ride";
          console.log(result);
        }
    })
  }


  handleChange = event =>
  {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  handleSubmit = event =>
  {
    event.preventDefault();
  }
  render()
  {
    return (
      <div className="hero3">
      <center>
        <h1>  <font color="purple"> UBER </font></h1>
        <h2><font color="purple">USER  BLOCKCHAIN  ENABLE  RIDE</font></h2>
        <h2><marquee behavior="scroll" direction="left" >/*Leave Sooner, Drive Slower, Live Longer */</marquee></h2>

        <form onSubmit={this.handleSubmit}>
         <FormGroup controlId="name" bsSize="large" style={{width:"400px"}}>
          <h2>  <ControlLabel>Name</ControlLabel></h2>
            <FormControl
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
            />
          </FormGroup>
          <FormGroup controlId="carNo" bsSize="large" style={{width:"400px"}}>
           <h2> <ControlLabel>Car Number</ControlLabel></h2>
            <FormControl
              type="text"
              value={this.state.carNo}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="licNo" bsSize="large" style={{width:"400px"}}>
          <h2>  <ControlLabel>License Number</ControlLabel></h2>
            <FormControl
              value={this.state.licNo}
              onChange={this.handleChange}
              type="text"
            />
          </FormGroup>
          <FormGroup controlId="aadharNo" bsSize="large" style={{width:"400px"}}>
          <h2>  <ControlLabel>Aadhar Number</ControlLabel></h2>
            <FormControl
              value={this.state.aadharNo}
              onChange={this.handleChange}
              type="text"
            />
          </FormGroup>
          <FormGroup controlId="mobNo" bsSize="large" style={{width:"400px"}}>
          <h2>  <ControlLabel>Mobile Number</ControlLabel></h2>
            <FormControl
              value={this.state.mobNo}
              onChange={this.handleChange}
              type="phoneno"
            />
          </FormGroup>
           <FormGroup controlId="pswd" bsSize="large" style={{width:"400px"}}>
          <h2>  <ControlLabel>Password</ControlLabel></h2>
            <FormControl
              value={this.state.pswd}
              onChange={this.handleChange}
              type="Password"
            />
          </FormGroup>
           <FormGroup controlId="rpswd" bsSize="large" style={{width:"400px"}}>
          <h2>  <ControlLabel>Re-Type Password</ControlLabel></h2>
            <FormControl
              value={this.state.rpswd}
              onChange={this.handleChange}
              type="Password"
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
