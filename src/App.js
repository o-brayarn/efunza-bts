import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Contacts, Login, About, Register, Checkout, Services } from "./pages";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Home from "./pages/homepage/Home";
import { Header, Footer, NavbarFooter } from "./components";

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
    <div className="App font-family">
      <Router>
        <NavbarFooter>
          <Header />
        </NavbarFooter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/tickets" element={<Checkout />} />
        </Routes>
        <NavbarFooter>
          <Footer />
        </NavbarFooter>
      </Router>
    </div>
  );
};

export default App;
