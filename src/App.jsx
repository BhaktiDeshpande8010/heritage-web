// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
// import About from "./pages/About"; ← future pages
// import Stays from "./pages/Stays";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="explore" element={<Explore />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/stays" element={<Stays />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
