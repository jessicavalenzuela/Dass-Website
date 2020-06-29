import React, { Component } from "react";
import art from "../../img/art.png";

export default class artsBlock extends Component {
  render() {
    return (
      <div>
        {/* <h3>Arts</h3> */}
        <img src={art}></img>
      </div>
    );
  }
}
