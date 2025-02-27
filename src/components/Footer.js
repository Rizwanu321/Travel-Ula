import React from "react";
import Travel from "../images/travel.jpg";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top-pattern"></div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section brand-section">
            <div className="brand">
              <img src={Travel} alt="Travel Ula" className="footer-logo" />
              <h3>Travel Ula</h3>
            </div>
            <p>
              Experience the magic of Maasai Mara with our expert guides and
              carefully crafted itineraries. Your gateway to unforgettable
              African adventures.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#overview">
                  <i className="fas fa-chevron-right"></i>
                  Overview
                </a>
              </li>
              <li>
                <a href="#itinerary">
                  <i className="fas fa-chevron-right"></i>
                  Itinerary
                </a>
              </li>
              <li>
                <a href="#pricing">
                  <i className="fas fa-chevron-right"></i>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#booking">
                  <i className="fas fa-chevron-right"></i>
                  Book Now
                </a>
              </li>
              <li>
                <a href="#gallery">
                  <i className="fas fa-chevron-right"></i>
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <p>
                  123 Safari Avenue
                  <br />
                  Nairobi, Kenya
                </p>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <p>
                  <a href="tel:+1234567890">+123 456 7890</a>
                  <br />
                  <a href="tel:+1234567891">+123 456 7891</a>
                </p>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <p>
                  <a href="mailto:info@travelula.com">info@travelula.com</a>
                  <br />
                  <a href="mailto:booking@travelula.com">
                    booking@travelula.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2023 Travel Ula. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
