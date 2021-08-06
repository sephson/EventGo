import React from "react";
import "./Events.css";
import events from "../../dummydata";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <Link to="/event-details">
      <div className="event-container">
        {events.map((event) => {
          return (
            <div className="single-event-wrap">
              <div className="event-image">
                <img
                  className="event-art"
                  src={event.event_art}
                  alt="eventart"
                />
              </div>
              <main className="event-main">
                <h3 className="event-name">{event.event_name}</h3>
                <h4 className="event-date">
                  {event.event_date}, {event.event_time}
                </h4>
                <p className="event-location">{event.event_location}</p>
                <em className="event-org">{event.event_organiser}</em>
              </main>
            </div>
          );
        })}
      </div>
    </Link>
  );
};

export default Events;
