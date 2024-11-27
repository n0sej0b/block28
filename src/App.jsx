import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar.jsx";
import Blue from "./components/Blue.jsx";
import Red from "./components/Red.jsx";
import React from 'react';
function App() {

return(
  <>
<div id="container">
     
        <div id="main-section">
  <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          

  </Routes>
</div>
<footer>
  <Navbar />
</footer>
    </div>
</>
);
}

export default App
