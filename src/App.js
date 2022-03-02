import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Market from "./pages/Market";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/market' element={<Market/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
      </Switch>
    </Router>
  );
}

export default App;
