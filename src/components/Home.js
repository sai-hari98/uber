import React, { Component } from 'react'

import { Link } from 'react-router-dom';

import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';

import './Home.css';

import diamond from './1.jpg';

export default class Home extends Component {


  render() {
    return(
      <center>
        <h1><font color="purple">UBER</font></h1>
        <h2><font color="purple">USER  BLOCKCHAIN  ENABLE  RIDE</font></h2>
        <h2><marquee behavior="scroll" direction="left" >Leave Sooner, Drive Slower, Live Longer </marquee></h2>
        <img src={diamond} width="800"/>
      </center>
    )

  }

}