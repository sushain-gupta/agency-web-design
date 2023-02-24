import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Common/Header";
import Home from "./Pages/Home/index";
import Services from "./Pages/Services/index";
import AboutUs from "./Pages/About/index";
import News from "./Pages/News/index";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<AboutUs />}></Route>
        <Route exact path="/services" element={<Services />}></Route>
        <Route exact path="/news" element={<News />}></Route>
      </Routes>
    </Router>
    {/* <Footer /> */}
  </>
);
