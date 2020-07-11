import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home";
import Header from "./components/header/header";
import Cooking from "./pages/cooking"
import Art from './pages/art';
import GoodFinds from './pages/goodFinds';
import TechyTech from './pages/techyTech';
import Travel from './pages/travel';
import Workout from './pages/workout';


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path="/art" component={Art} />
        <Route exact path='/cooking' component={Cooking} />
        <Route exact path="/goodFinds" component={GoodFinds} />
        <Route exact path="/techyTech" component={TechyTech} />
        <Route exact path="/travel" component={Travel} />
        <Route exact path="/workout" component={Workout} />
      </Switch>
    </>
  );
}

export default App;
