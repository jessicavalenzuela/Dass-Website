import React, { Component } from "react";
import cook from "../../img/cook.png";

export default class cookingBlock extends Component {
  render() {
    return (
      <div>
        {/* <h3>Cooking</h3> */}
        <img src={cook}></img>
      </div>
    );
  }
}
