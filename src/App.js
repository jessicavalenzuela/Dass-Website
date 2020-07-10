import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home";
import Header from "./components/header/header";
import Cooking from "./pages/cooking"
import Blocks from "./components/blocks/blocks";
// import Travel from "./components/travelBlock/travelBlock";
// import TechyTech from "./components/techyTechBlock/techTechBlock";
// import Arts from "./components/Block/block";
// import Workout from "./components/workoutBlock/workoutBlock";
// import GoodsFinds from "./components/goodFindsBlock/goodFindsBlock";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/cooking' component={Cooking} />
      </Switch>
    </>
  );
}

export default App;
