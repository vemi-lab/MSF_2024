import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./fonts/Pixeled.ttf";
import "./fonts/NeuePixelSans.ttf";

import Home from "./Pages/Home/Home";
import Game from "./Pages/Game/Game";
import AVADemo from "./Pages/AVADemo/AVADemo";
import HowToResearch from "./Pages/HowToResearch/HowToResearch";
import SimInfo from "./Pages/SimInfo/SimInfo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/MSF_2024" element={<Home />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/AVADemo" element={<AVADemo />} />
        <Route path="/HowToResearch" element={<HowToResearch />} />
        <Route path="/SimInfo" element={<SimInfo></SimInfo>} />
      </Routes>
    </div>
  );
}

export default App;
