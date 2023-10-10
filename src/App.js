import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Contacts, Login, About, Register } from "./pages";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Home from "./pages/homepage/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Services from "./pages/services/Services";
import {
  faCheckSquare,
  faCoffee,
  faUser,
  faLock,
  faEye,
  faInbox,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee, faUser, faLock, faEye, faInbox);

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
