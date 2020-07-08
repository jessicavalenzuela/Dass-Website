import React, { Component } from "react";
import art from "../../img/dennis.jpg";

export default class artsBlock extends Component {
  render() {
    return (
      <div>
        <a href="/art">
          <img src={art} height="350px" width="350px"></img>
        </a>
      </div>
    );
  }
}
