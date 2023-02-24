import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Header from "./Components/Header";
import Messages from "./Components/Messages";
import About from "./Components/About";
import News from "./Components/About";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/messages" element={<Messages />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/news" element={<News />}></Route>
      </Routes>
    </Router>
  </>
);
