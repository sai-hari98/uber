import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import Cookies from "universal-cookie";
 export default class afterDriver extends Component {
 render() {
    let cookie = new Cookies();
    return (
        <div>
            <p>{cookie.get("driver")}</p>
        </div>
        );
  }
}