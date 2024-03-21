import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./fonts/NeuePixelSans.ttf";

import Home from "./Pages/Home/Home";
import Game from "./Pages/Game/Game";
import Catheters from "./Pages/Catheters/Catheters";
import HowToResearch from "./Pages/HowToResearch/HowToResearch";
import PFAS from "./Pages/PFAS/PFAS";
import SimInfo from "./Pages/SimInfo/SimInfo";
import Rainbows from "./Pages/Rainbows/Rainbows";
import Ultrahaptics from "./Pages/Ultrahaptics/Ultrahaptics";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/MSF_2024" element={<Home />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/Catheters" element={<Catheters />} />
        <Route path="/PFAS" element={<PFAS />} />
        <Route path="/Rainbows" element={<Rainbows />} />
        <Route path="/Ultrahaptics" element={<Ultrahaptics />} />
        <Route path="/HowToResearch" element={<HowToResearch />} />
        <Route path="/SimInfo" element={<SimInfo></SimInfo>} />
      </Routes>
    </div>
  );
}

export default App;
