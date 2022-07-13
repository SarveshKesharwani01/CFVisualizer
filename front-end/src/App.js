import './App.css';
import React from 'react';
import Login from './Login.js';
import Details from './Details.js'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Details" element={<Details/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
