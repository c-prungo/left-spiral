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

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<AboutUs/>} />
      </Switch>
    </Router>
  );
}

export default App;
