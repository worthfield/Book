import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./container/Home";
import About from "./container/About";
import Signup from "./container/Signup";
import Signin from "./container/Signin";
import Dashboard from "./container/Dashboard";
import Header from "./components/Header";
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
