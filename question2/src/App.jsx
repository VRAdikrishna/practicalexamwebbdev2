import React from "react";
import "./App.css";

import LiveInput from "./inputs/LiveInput";

import {BrowserRouter,Routes,Route,Link,} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1>React Practical Exam</h1>

        <LiveInput />

        <nav>
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;