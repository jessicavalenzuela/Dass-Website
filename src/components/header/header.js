import React, { Component } from "react";
import logo from "../../img/logo.png";
import "./headerStyle.scss";
export default class header extends Component {
  render() {
    return (
      <div className="mainBlock">
        <h1>Dass What We Gonna Do</h1>
        <img src={logo} />
      </div>
    );
  }
}
