import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home/Home';
import Game from './Pages/Game/Game';
import AVADemo from './Pages/AVADemo/AVADemo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/MSF_2024" element={<Home />}/>
        <Route path="/Game" element={<Game />} />
        <Route path="/AVADemo" element={<AVADemo />} />
      </Routes>
    </div>
  );
}

export default App;
