import React, { Component } from "react";
import cook from "../../img/cook.jpg";

export default class cookingBlock extends Component {
  render() {
    return (
      <div>
        <a href="/cooking">
          <img src={cook} height="350px" width="350px"></img>
        </a>
      </div>
    );
  }
}
