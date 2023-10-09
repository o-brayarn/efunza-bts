import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import React from "react";
import Home from "./pages/homepage/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Services from "./pages/services/Services";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
