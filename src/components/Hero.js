import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">Limited Time Offer</div>
        <h1 className="animate-fade-in">
          Big Cats Week at
          <span className="highlight"> Maasai Mara</span>
        </h1>
        <h2 className="animate-fade-in delay-1">Diwali 2023 Special</h2>

        <div className="hero-features animate-fade-in delay-2">
          <div className="feature">
            <div className="feature-icon">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <div className="feature-text">
              <span className="feature-label">Duration</span>
              <span className="feature-value">4 Days</span>
            </div>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="feature-text">
              <span className="feature-label">Location</span>
              <span className="feature-value">Kenya</span>
            </div>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="feature-text">
              <span className="feature-label">Experience</span>
              <span className="feature-value">Premium</span>
            </div>
          </div>
        </div>

        <p className="hero-description animate-fade-in delay-3">
          Experience the magnificent wildlife of Kenya this November with our
          expertly curated safari adventure
        </p>

        <div className="hero-cta-group animate-fade-in delay-4">
          <button className="hero-cta primary">
            <span>Start Your Journey</span>
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="hero-cta secondary">
            <i className="fas fa-play"></i>
            <span>Watch Video</span>
          </button>
        </div>

        <div className="hero-scroll-indicator">
          <span>Scroll to explore</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;
