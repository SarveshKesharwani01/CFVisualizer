import "./App.css";
import React from "react";
import Login from "./Individual.js";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Competitive from "./Competitive";
import Compare from "./Compare";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Navigate to="/individual" />} />
          <Route path="/individual" element={<Login />} />
          {/* <Route path="/details" element={<Details />} /> */}
          <Route path="/compare" element={<Competitive />} />
          <Route path="/comparedetails" element={<Compare />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
