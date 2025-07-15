// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import PropertyDetails from "./pages/PropertyDetails";
import SignIn from "./pages/SignInModal";
import About from "./pages/About";
// import Stays from "./pages/Stays";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="PropertyDel" element={<PropertyDetails />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/stays" element={<Stays />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
