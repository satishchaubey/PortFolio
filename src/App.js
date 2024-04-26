import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact"; 

import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
      
        <Route path="/" Component={Home} />
        <Route path="/project" Component={Project}/>
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact}/>
      </Routes>
    </>
  );
}

export default App;
