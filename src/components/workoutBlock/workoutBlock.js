import React, { Component } from "react";
import workout from "../../img/workout.png";

export default class workoutBlock extends Component {
  render() {
    return (
      <div>
        {/* <h3>Workout</h3> */}
        <img src={workout}></img>
      </div>
    );
  }
}
