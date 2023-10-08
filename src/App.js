import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import React from "react";
import Home from "./pages/homepage/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Services from "./pages/services/Services";

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
