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
        <h1>Basic Info</h1>
        <input className="event-info-input" placeholder="Event Title" />
        <input className="event-info-input" placeholder="Organiser" />
        <h3 className="event-info-location">Location</h3>
        <span>Venue</span>
        <span>Online</span>

        <h3 className="event-info-location">Date and Time</h3>
        <p>
          Let the people who would attend your event when know when your event
          starts
        </p>
        <span>One Day event</span>
        <span>Multiple days event</span>
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

        <h1>Main Event</h1>
        <input type="image" placeholder="Event Image" alt="event image" />
        <textarea className="event-info-input" placeholder="Description" />

        <button>Publish </button>
      </form>
    </div>
  );
};

export default CreateEvent;
