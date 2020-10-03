import React, { Component } from 'react'
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import button from 'react-bootstrap';
import './ride.css'
export default class CustomNavbar extends Component {


  clicked(){
   alert("Choose Your Driver")

  }
  clicked1(){
   alert("Satrt Your Ride!!!!!")
   alert("Transfer")
   window.location="./transfer"

  }
  render() {
    return (
<div className="bg">
<center>
          <li></li>
       <h1>  <font color="CadetBlue"> UBER</font></h1><li>
      </li>
 <h2><font color="CadetBlue">USER  BLOCKCHAIN  ENABLE  RIDE</font></h2><li></li>
    

<h2><marquee behavior="scroll" direction="left" >/*Leave Sooner, Drive Slower, Live Longer */</marquee></h2><li>
      </li>

         <li>
         </li>
</center>


<li>
<a>To:</a></li>
<div className="hero">
<RadioGroup onChange={ this.onChange } horizontal>
  <RadioButton value="Dwarakanagar">
    Dwarakanagar
  </RadioButton>
  <RadioButton value="DiamondPark">
    DiamondPark
  </RadioButton>
  <RadioButton value="Dabagardens">
    Dabagardens
  </RadioButton>
   
   <RadioButton value="MVP">
    MVP
  </RadioButton>

<RadioButton value="NAD">
  NAD
  </RadioButton>
</RadioGroup>
</div>
<li></li>
<li>
<a>From:</a></li>
<div className="hero">
<RadioGroup onChange={ this.onChange } horizontal>
  <RadioButton value="Dwarakanagar">
    Dwarakanagar
  </RadioButton>
  <RadioButton value="DiamondPark">
    DiamondPark
  </RadioButton>
  <RadioButton value="Dabagardens">
    Dabagardens
  </RadioButton>
   
   <RadioButton value="MVP">
    MVP
  </RadioButton>

<RadioButton value="NAD">
  NAD
  </RadioButton>
</RadioGroup>
<li></li>
</div>
<center>
<button onClick={this.clicked}> start </button>
</center>

<li>
<a>Available Drivers</a></li>
<div className="hero">
<RadioGroup onChange={ this.onChange } horizontal>
  <RadioButton value="Driver1">
    Driver1
  </RadioButton>
  <RadioButton value="Driver2">
    Driver2
  </RadioButton>
  <RadioButton value="Driver3">
    Driver3
  </RadioButton>
  <RadioButton value="Driver4">
    Driver4
  </RadioButton>
  <RadioButton value="Driver5">
   Driver5
  </RadioButton>
  </RadioGroup>
<li></li>
</div>
<center>
<button onClick={this.clicked1}> start </button>
</center>


</div>
 )
  }
}