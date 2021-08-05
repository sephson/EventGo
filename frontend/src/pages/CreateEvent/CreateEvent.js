import React from "react";
import { Link } from "react-router-dom";
import "./CreateEvent.css";

const CreateEvent = () => {
  return (
    <div className="create-event">
      <div className="left-side-nav">
        <Link to="/">
          <h1 className="navbarLogo">eventgo</h1>
        </Link>
      </div>

      <form className="event-info">
        <div className="basic-info">
          <h1>Basic Info</h1>
          <input className="event-info-input" placeholder="Event Title" />
          <input className="event-info-input" placeholder="Organiser" />
        </div>
        <h3 className="event-info-location">Location</h3>
        <span className="online-or-venue">Venue</span>
        <span className="online-or-venue online">Online</span>

        <h3 className="event-info-location">Date and Time</h3>
        <p>
          Let the people who would attend your event when know when your event
          starts
        </p>
        <span className="online-or-venue">One Day event</span>
        <span className="online-or-venue online">Multiple days event</span>
        <div className="dandt">
          <div className="starts one-day">
            <input
              className="event-info-input"
              type="date"
              placeholder="Event Date (starts)"
            />
            <input
              className="event-info-input"
              type="time"
              placeholder="Event Time (starts)"
            />
          </div>
          <div className="end">
            <input
              className="event-info-input"
              type="date"
              placeholder="Event Date (ends)"
            />
            <input
              className="event-info-input"
              type="time"
              placeholder="Event Time (end)"
            />
          </div>
        </div>

        <h1>Main Event</h1>
        <input type="file" classname="img" name="img" accept="image/*" />
        <textarea className="event-info-input" placeholder="Description" />
        <input type="number" placeholder="price" />

        <button>Publish </button>
      </form>
    </div>
  );
};

export default CreateEvent;
