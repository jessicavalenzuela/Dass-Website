import React from "react";
import "./App.scss";
import Header from "./components/header/header";
import Blocks from "./components/blocks/blocks";
// import Travel from "./components/travelBlock/travelBlock";
// import TechyTech from "./components/techyTechBlock/techTechBlock";
// import Arts from "./components/Block/block";
// import Workout from "./components/workoutBlock/workoutBlock";
// import GoodsFinds from "./components/goodFindsBlock/goodFindsBlock";

function App() {
  return (
    <main className="mainBody">
      <div>
        <Header />
      </div>
      <div className="blocks">
        <Blocks />
      </div>
    </main>
  );
}

export default App;
