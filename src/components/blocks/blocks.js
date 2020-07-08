import React, { Component } from "react";
import "./block.scss";

import art from "../../img/dennis.jpg";
import cook from "../../img/cook.jpg";
import find from "../../img/street.jpg";
import tech from "../../img/code.jpg";
import travel from "../../img/iceland.jpg";
import workout from "../../img/workout.JPG";

export default class artsBlock extends Component {
  render() {
    return (
      <section>
        <div>
          <a href="/art">
            <img src={art} height="350px" width="350px"></img>
          </a>
        </div>
        <div>
          <a href="/cooking">
            <img src={cook} height="350px" width="350px"></img>
          </a>
        </div>
        <div>
          <a href="/goodfinds">
            <img src={find} height="350px" width="350px"></img>
          </a>
        </div>
        <div>
          <a href="/techytech">
            <img src={tech} height="350px" width="350px"></img>
          </a>
        </div>
        <div>
          <a href="/travel">
            <img src={travel} height="350px" width="350px"></img>
          </a>
        </div>
        <div>
          <a href="/workout">
            <img src={workout} height="350px" width="350px"></img>
          </a>
        </div>
      </section>
    );
  }
}
