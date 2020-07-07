import React from "react";
import "./App.scss";
import Header from "./components/header/header";
import Cooking from "./components/cookingBlock/cookingBlock";
import Travel from "./components/travelBlock/travelBlock";
import TechyTech from "./components/techyTechBlock/techTechBlock";
import Arts from "./components/artsBlock/artsBlock";
import Workout from "./components/workoutBlock/workoutBlock";
import GoodsFinds from "./components/goodFindsBlock/goodFindsBlock";

function App() {
  return (
    <main className="mainBody">
      <div>
        <Header />
      </div>
      <div className="blocks">
        <Cooking />
        <Travel />
        <TechyTech />
        <Arts />
        <Workout />
        <GoodsFinds />
      </div>
    </main>
  );
}

export default App;
