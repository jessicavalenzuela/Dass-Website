import React, { Component } from "react";
import find from "../../img/street.jpg";

export default class goodFindsBlock extends Component {
  render() {
    return (
      <div>
        <a href="/goodfinds">
          <img src={find} height="350px" width="350px"></img>
        </a>
      </div>
    );
  }
}
