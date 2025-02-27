import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Itinerary from "./components/Itinerary";
import Pricing from "./components/Pricing";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import "./App.css";
import Terms from "./components/Terms";
import Gallery from "./components/Gallery";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Hero />
        <Overview />
        <Itinerary />
        <Gallery />
        <Pricing />
        <Terms />
        <Booking />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
