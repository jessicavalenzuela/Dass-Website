import React, { Component } from "react";
import travel from "../../img/iceland.jpg";

export default class travelBlock extends Component {
  render() {
    return (
      <div>
        <a href="/travel">
          <img src={travel} height="350px" width="350px"></img>
        </a>
      </div>
    );
  }
}
