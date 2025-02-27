import React, { useState } from "react";
import "../styles/Itinerary.css";

const Itinerary = () => {
  const [activeDay, setActiveDay] = useState(1);

  const itineraryData = [
    {
      day: 1,
      date: "Nov 14th 2023",
      title: "Journey to Maasai Mara & First Game Drive",
      description: `Our drivers would pick up from the JKIA airport at 7AM. You would board our 4*4 Landcruisers to embark on your journey to Maasai Mara. The road journey takes about 5 to 6 hours, but you would be amazed by the landscape enroute. You would first see the Nairobi national park on your left side. On a lucky day, you would also see a White Rhino grazing near the fence. Nairobi city has a national park right in its heart!! And it is home for Lions, Leopards, White rhinos, gazzelles, Giraffes, crowned cranes, and other mammals and birds. This is the only city in the World which boasts a National park within the city limits.`,
      activities: [
        {
          time: "7:00 AM",
          activity: "Pickup from JKIA airport",
          details: "Meet your driver and begin your journey",
        },
        {
          time: "8:00 AM",
          activity: "Nairobi National Park Views",
          details: "Witness wildlife within city limits",
        },
        {
          time: "9:00 AM",
          activity: "Great Rift Valley",
          details:
            "Stop at viewpoints of this natural wonder spanning 6,400 kilometers",
        },
        {
          time: "12:00 PM",
          activity: "Arrive at Maasai Mara",
          details: "Check-in and lunch",
        },
        {
          time: "3:00 PM",
          activity: "First Game Drive",
          details: "Explore Talek and Topi plains area",
        },
        {
          time: "6:00 PM",
          activity: "Return to Camp",
          details: "Evening campfire and dinner",
        },
      ],
      highlights: [
        "Scenic drive through Nairobi National Park",
        "Great Rift Valley viewpoints",
        "First encounter with Maasai Mara wildlife",
        "Evening campfire experience",
        "Chance to see the 'Topi Pride' of lions",
      ],
      meals: "Lunch, Dinner",
    },
    {
      day: 2,
      date: "Nov 15th",
      title: "Sunrise Safari & Bush Breakfast",
      description: `Wake up early. Freshen yourself and head to the restaurant for a hot cup of coffee or tea. The mornings are cold at Mara, so do wear your fleece jacket for the morning game drive. Breakfast would be packed for you. Explore the mornings at Mara. The Sunrise you witness at Mara is something which you would never get to witness anywhere in the World.`,
      activities: [
        {
          time: "Early Morning",
          activity: "Sunrise Game Drive",
          details: "Experience the magical Mara sunrise",
        },
        {
          time: "Mid-Morning",
          activity: "Bush Breakfast",
          details: "Unique dining experience under an acacia tree",
        },
        {
          time: "11:30 AM",
          activity: "Return to Camp",
          details: "Rest and relaxation",
        },
        {
          time: "3:00 PM",
          activity: "Afternoon Game Drive",
          details: "Leopard tracking expedition",
        },
      ],
      highlights: [
        "Breathtaking sunrise views",
        "Bush breakfast experience",
        "Chance to see cheetahs",
        "Witness Topi calving season",
        "Leopard tracking",
      ],
      meals: "Breakfast, Lunch, Dinner",
    },
    {
      day: 3,
      date: "Nov 16th",
      title: "Full Day Adventure at Sand River",
      description: `Today is a very busy day for you at Mara. Wake up early, freshen yourself, have a hot beverage and jump into your designated vehicles. Today you would be going towards the border of Maasai Mara. You would be going for a full day game drive with packed breakfast and lunch. Sand river is the border for Maasai Mara and Tanzania.`,
      activities: [
        {
          time: "Early Morning",
          activity: "Departure for Sand River",
          details: "Full day game drive begins",
        },
        {
          time: "Morning",
          activity: "Border Experience",
          details: "Visit the Kenya-Tanzania border at Sand River",
        },
        {
          time: "Afternoon",
          activity: "Wildlife Viewing",
          details: "Search for the elusive rhino",
        },
        {
          time: "Evening",
          activity: "Final Campfire",
          details: "Share experiences with the group",
        },
      ],
      highlights: [
        "Visit to Sand River border",
        "Full day game drive",
        "Chance to see the Big 5",
        "Packed breakfast and lunch",
        "Final evening campfire",
      ],
      meals: "Breakfast, Lunch, Dinner",
    },
    {
      day: 4,
      date: "Nov 17th",
      title: "Farewell to Mara",
      description: `Wake up at leisure, have a nice and heavy breakfast while you discuss about your experience with your group. Board the designated Landcruisers to embark on the journey to Nairobi. You would be dropped at the JKIA airport.`,
      activities: [
        {
          time: "Morning",
          activity: "Leisure Breakfast",
          details: "Final meal at the camp",
        },
        {
          time: "Mid-Morning",
          activity: "Departure",
          details: "Journey back to Nairobi",
        },
        {
          time: "Afternoon",
          activity: "Airport Drop-off",
          details: "End of services at JKIA airport",
        },
      ],
      highlights: [
        "Leisure morning",
        "Final group gathering",
        "Scenic drive back to Nairobi",
      ],
      meals: "Breakfast",
    },
  ];

  return (
    <section id="itinerary" className="itinerary-section">
      <div className="container">
        <h2 className="section-title">Your Day-by-Day Adventure</h2>
        <div className="itinerary-nav">
          {itineraryData.map((day) => (
            <button
              key={day.day}
              className={`day-tab ${activeDay === day.day ? "active" : ""}`}
              onClick={() => setActiveDay(day.day)}
            >
              Day {day.day}
            </button>
          ))}
        </div>

        {itineraryData.map((day) => (
          <div
            key={day.day}
            className={`itinerary-day ${activeDay === day.day ? "active" : ""}`}
          >
            <div className="day-header">
              <div className="day-title">
                <h3>
                  Day {day.day} - {day.date}
                </h3>
                <h4>{day.title}</h4>
              </div>
              <div className="day-meals">
                <i className="fas fa-utensils"></i>
                <span>{day.meals}</span>
              </div>
            </div>

            <div className="day-content">
              <div className="day-description">
                <p>{day.description}</p>
              </div>

              <div className="day-activities">
                <h5>Day's Schedule</h5>
                <div className="timeline">
                  {day.activities.map((activity, index) => (
                    <div key={index} className="timeline-item">
                      <div className="time">{activity.time}</div>
                      <div className="activity">
                        <h6>{activity.activity}</h6>
                        <p>{activity.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="day-highlights">
                <h5>Highlights</h5>
                <ul>
                  {day.highlights.map((highlight, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Itinerary;
