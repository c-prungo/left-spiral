import './App.css';
import { React } from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Market from "./components/pages/Market";
import Portfolio from "./components/pages/Portfolio";

function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/market' element={<Market/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
