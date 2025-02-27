import React from "react";
import "../styles/Overview.css";

const Overview = () => {
  const highlights = [
    {
      icon: "fa-paw",
      title: "Big Cats",
      description:
        "Witness lions, leopards, and cheetahs in their natural habitat",
      color: "#e74c3c",
    },
    {
      icon: "fa-mountain",
      title: "Scenic Views",
      description: "Experience breathtaking landscapes and dramatic skies",
      color: "#2ecc71",
    },
    {
      icon: "fa-camera",
      title: "Photo Opportunities",
      description: "Perfect conditions for wildlife photography",
      color: "#3498db",
    },
    {
      icon: "fa-sun",
      title: "Perfect Weather",
      description: "November offers ideal safari conditions",
      color: "#f1c40f",
    },
  ];

  return (
    <section id="overview" className="overview">
      <div className="overview-shape"></div>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Journey Overview</h2>
          <p className="section-subtitle">Discover the magic of Maasai Mara</p>
        </div>

        <div className="overview-content">
          <div className="overview-text">
            <div className="text-card">
              <div className="quote-icon">
                <i className="fas fa-quote-right"></i>
              </div>
              <p>
                November is one of the Best times to visit Kenya, especially to
                visit its prime park, Maasai Mara. This is because the large
                migratory herds would have returned to Tanzania and now the Big
                cats have to venture long distances to hunt their prey.
              </p>
              <p>
                November is also the season of short rains. This makes the
                plains of Maasai Mara lush green. The skies are truly dramatic
                and colourful. The Sun rise and Sun sets during November at Mara
                is simply breath taking.
              </p>
              <div className="overview-stats">
                <div className="stat-item">
                  <span className="stat-number">4</span>
                  <span className="stat-label">Days</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">8+</span>
                  <span className="stat-label">Activities</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Adventure</span>
                </div>
              </div>
            </div>
          </div>

          <div className="overview-highlights">
            {highlights.map((highlight, index) => (
              <div
                className="highlight-card"
                key={index}
                style={{ "--highlight-color": highlight.color }}
              >
                <div className="highlight-icon">
                  <i className={`fas ${highlight.icon}`}></i>
                </div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
                <div className="highlight-footer">
                  <button className="learn-more">
                    Learn More
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
