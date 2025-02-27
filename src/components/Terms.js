import React, { useState } from "react";
import "../styles/Terms.css";

const Terms = () => {
  const [activeTab, setActiveTab] = useState("terms");

  return (
    <section id="terms" className="terms-section">
      <div className="container">
        <h2 className="section-title">Important Information</h2>

        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === "terms" ? "active" : ""}`}
            onClick={() => setActiveTab("terms")}
          >
            Terms & Conditions
          </button>
          <button
            className={`tab-btn ${activeTab === "payment" ? "active" : ""}`}
            onClick={() => setActiveTab("payment")}
          >
            Payment & Cancellation
          </button>
          <button
            className={`tab-btn ${activeTab === "inclusions" ? "active" : ""}`}
            onClick={() => setActiveTab("inclusions")}
          >
            Inclusions & Exclusions
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "terms" && (
            <div className="terms-list">
              <ul>
                <li>
                  Costs are based at 4 paxs per vehicle for game drives and 5
                  per vehicle for Internal transfers
                </li>
                <li>
                  Stay at Mara would be at Zebra plains or Loyk camp or Julia
                  river camp
                </li>
                <li>Last day to confirm the tour is August 14th 2023</li>
                <li>
                  Guests travelling should process valid passports with a
                  minimum of 6 months validity
                </li>
                <li>
                  Yellow fever and Oral polio vaccination required (15 days
                  prior to travel)
                </li>
                <li>International travel insurance required</li>
                <li>Airport pickup at 7AM on Nov 14th from JKIA airport</li>
                <li>Groups above 5 can avail special discounts</li>
              </ul>
            </div>
          )}

          {activeTab === "payment" && (
            <div className="payment-terms">
              <div className="payment-policy">
                <h4>Payment Terms</h4>
                <p>100% of the tour cost at the time of booking</p>
              </div>

              <div className="cancellation-policy">
                <h4>Cancellation Policy</h4>
                <ul>
                  <li>60+ days before travel: 50% credit</li>
                  <li>Within 30 days: No refund</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "inclusions" && (
            <div className="inclusions-exclusions">
              <div className="inclusions">
                <h4>What's Included</h4>
                <ul>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>Internal transfers by Landcruiser</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>Twin sharing accommodation</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>Game drives</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>Park and Guide fees</span>
                  </li>
                </ul>
              </div>

              <div className="exclusions">
                <h4>What's Not Included</h4>
                <ul>
                  <li>
                    <i className="fas fa-times"></i>
                    <span>Airfare and VISA charges</span>
                  </li>
                  <li>
                    <i className="fas fa-times"></i>
                    <span>Personal expenses</span>
                  </li>
                  <li>
                    <i className="fas fa-times"></i>
                    <span>Tips and gratitude</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Terms;
