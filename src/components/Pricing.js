import React from "react";
import "../styles/Pricing.css";

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <h2 className="section-title">Tour Pricing</h2>

        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="card-content">
              <h3>Adult Package</h3>
              <div className="price">
                <span className="currency">USD</span>
                <span className="amount">1,582</span>
              </div>
              <p className="price-detail">Including local taxes</p>
              <ul className="features">
                <li>All accommodations</li>
                <li>Game drives</li>
                <li>Professional guides</li>
                <li>All meals included</li>
              </ul>
            </div>
            <button className="book-now">Book Now</button>
          </div>

          <div className="pricing-card">
            <div className="card-content">
              <h3>Child Package</h3>
              <p className="age-info">(4 to 9 years)</p>
              <div className="price">
                <span className="currency">USD</span>
                <span className="amount">1,400</span>
              </div>
              <p className="price-detail">Including local taxes</p>
              <ul className="features">
                <li>All accommodations</li>
                <li>Game drives</li>
                <li>Professional guides</li>
                <li>All meals included</li>
              </ul>
            </div>
            <button className="book-now">Book Now</button>
          </div>

          <div className="pricing-card special-offer">
            <div className="offer-badge">Special Offer</div>
            <div className="card-content">
              <h3>Independence Day Special</h3>
              <div className="special-prices">
                <div className="price-group">
                  <span className="price-label">Adult</span>
                  <div className="price">
                    <span className="currency">USD</span>
                    <span className="amount">1,322</span>
                  </div>
                </div>
                <div className="price-group">
                  <span className="price-label">Child</span>
                  <div className="price">
                    <span className="currency">USD</span>
                    <span className="amount">1,127</span>
                  </div>
                </div>
              </div>
              <p className="offer-deadline">Valid until August 14th, 2023</p>
              <ul className="features">
                <li>Limited time offer</li>
                <li>Save up to $260</li>
                <li>All regular features included</li>
                <li>Best value package</li>
              </ul>
            </div>
            <button className="book-now special">Book Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
