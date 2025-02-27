import React, { useState, useEffect } from "react";
import Travel from "../images/travel.jpg";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["overview", "itinerary", "gallery", "pricing"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={Travel} alt="Travel Ula" />
          <span className="logo-text">Travel Ula</span>
        </div>

        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <div className="nav-items">
            <a
              href="#overview"
              className={activeSection === "overview" ? "active" : ""}
              onClick={() => setIsOpen(false)}
            >
              <i className="fas fa-compass"></i>
              <span>Overview</span>
            </a>
            <a
              href="#itinerary"
              className={activeSection === "itinerary" ? "active" : ""}
              onClick={() => setIsOpen(false)}
            >
              <i className="fas fa-map-marked-alt"></i>
              <span>Itinerary</span>
            </a>
            <a
              href="#gallery"
              className={activeSection === "gallery" ? "active" : ""}
              onClick={() => setIsOpen(false)}
            >
              <i className="fas fa-images"></i>
              <span>Gallery</span>
            </a>
            <a
              href="#pricing"
              className={activeSection === "pricing" ? "active" : ""}
              onClick={() => setIsOpen(false)}
            >
              <i className="fas fa-tag"></i>
              <span>Pricing</span>
            </a>
          </div>
          <a href="#booking">
            <button className="nav-cta" onClick={() => setIsOpen(false)}>
              <i className="fas fa-calendar-check"></i>
              Book Now
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
