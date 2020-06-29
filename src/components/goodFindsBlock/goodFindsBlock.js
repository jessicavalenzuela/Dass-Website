import React, { Component } from "react";
import find from "../../img/find.png";

export default class goodFindsBlock extends Component {
  render() {
    return (
      <div>
        {/* <h3>Goods Finds</h3> */}
        <img src={find} width="340px" height="340px"></img>
      </div>
    );
  }
}
