import React, { Component } from "react";
import workout from "../../img/workout.JPG";

export default class workoutBlock extends Component {
  render() {
    return (
      <div>
        <a href="/workout">
          <img src={workout} height="350px" width="350px"></img>
        </a>
      </div>
    );
  }
}
