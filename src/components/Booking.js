import React, { useState } from "react";
import "../styles/Booking.css";

const Booking = () => {
  const initialFormState = {
    name: "",
    email: "",
    phone: "",
    adults: "",
    children: "",
    travelDate: "",
    accommodation: "zebra-plains",
    specialRequirements: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Successfully Booked");
    console.log(formData);
    setFormData(initialFormState);
  };

  return (
    <section id="booking" className="booking">
      <div className="container">
        <h2 className="section-title">Book Your Maasai Mara Adventure</h2>

        <div className="booking-container">
          <div className="booking-info">
            <div className="info-card">
              <h3>Start Your Journey</h3>
              <p>
                Experience the magnificent wildlife of Kenya this November with
                our expertly curated tour package.
              </p>

              <div className="tour-highlights">
                <h4>Tour Highlights</h4>
                <ul>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>4 Days of Adventure</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>Professional Safari Guides</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>Luxury Accommodation</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>All-Inclusive Meals</span>
                  </li>
                </ul>
              </div>

              <div className="contact-info">
                <h4>Need Help?</h4>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <div>
                    <span>Call Us</span>
                    <a href="tel:+1234567890">+1234567890</a>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <span>Email Us</span>
                    <a href="mailto:info@travelula.com">info@travelula.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-clock"></i>
                  <div>
                    <span>Working Hours</span>
                    <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form className="booking-form" onSubmit={handleSubmit}>
            <h3>Booking Information</h3>

            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="form-group">
                <label>Preferred Travel Date</label>
                <input
                  type="date"
                  value={formData.travelDate}
                  onChange={(e) =>
                    setFormData({ ...formData, travelDate: e.target.value })
                  }
                  min="2023-11-14"
                  max="2023-11-17"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Number of Adults</label>
                <input
                  type="number"
                  value={formData.adults}
                  onChange={(e) =>
                    setFormData({ ...formData, adults: e.target.value })
                  }
                  min="1"
                  placeholder="Number of adults"
                  required
                />
              </div>
              <div className="form-group">
                <label>Number of Children (4-9 years)</label>
                <input
                  type="number"
                  value={formData.children}
                  onChange={(e) =>
                    setFormData({ ...formData, children: e.target.value })
                  }
                  min="0"
                  placeholder="Number of children"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Preferred Accommodation</label>
              <select
                value={formData.accommodation}
                onChange={(e) =>
                  setFormData({ ...formData, accommodation: e.target.value })
                }
                required
              >
                <option value="zebra-plains">Zebra Plains Camp</option>
                <option value="loyk">Loyk Camp</option>
                <option value="julia-river">Julia River Camp</option>
              </select>
            </div>

            <div className="form-group">
              <label>Special Requirements</label>
              <textarea
                value={formData.specialRequirements}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    specialRequirements: e.target.value,
                  })
                }
                placeholder="Any special requirements or requests?"
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <i className="fas fa-paper-plane"></i>
              Send Booking Request
            </button>

            <p className="form-note">
              * Our team will contact you within 24 hours to confirm your
              booking
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
