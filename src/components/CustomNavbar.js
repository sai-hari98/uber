import React, { Component } from 'react'
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
   render() {
    return (
      <Navbar>
              
              <NavItem eventKey={1} componentClass={Link} href="/" to="/">
               <h3> Home </h3>
              </NavItem>

              <NavItem eventkey={2} componentClass={Link} href="/login1" to="/login1">
               <h3>DriverLogin </h3>
              </NavItem>

              <NavItem eventkey={3} componentClass={Link} href="/login2" to="/login2">
               <h3>UserLogin </h3>
              </NavItem>

              <NavItem eventkey={4} componentClass={Link} href="/dsignup" to="/dsignup">
               <h3>DriverSignup </h3>
              </NavItem>

              <NavItem eventkey={5} componentClass={Link} href="/usignup" to="/usignup">
               <h3> UserSignup </h3>
              </NavItem>            
            
      </Navbar>
    )
  }
}