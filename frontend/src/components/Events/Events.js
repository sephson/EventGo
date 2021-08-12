import React, { useEffect } from "react";
import "./Events.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { allEvents } from "../../actions/eventActions";
import Loading from "../Loader/Loader";

const Events = () => {
  const dispatch = useDispatch();

  const events = useSelector((state) => state.events);
  const { loading, event, error } = events;
  console.log(event);

  useEffect(() => {
    dispatch(allEvents());
  }, [dispatch]);
  // console.log(error ? "error oh" : "good");
  return (
    <Link to="/event-details">
      {loading ? (
        <Loading type={"bars"} color={"#ffb037"} />
      ) : (
        <div className="event-container">
          {event.map((event) => {
            return (
              <div className="single-event-wrap">
                <div className="event-image">
                  <img className="event-art" src={event.image} alt="eventart" />
                </div>
                <main className="event-main">
                  <h3 className="event-name">{event.title}</h3>
                  <h4 className="event-date">
                    {event.startDate}, {event.startTime}
                  </h4>
                  <p className="event-location">
                    {event.location ? event.location : "Online"}
                  </p>
                  <em className="event-org">{event.organiser}</em>
                  <p>₦{event.price ? event.price : "Free"}</p>
                </main>
              </div>
            );
          })}
        </div>
      )}
    </Link>
  );
};

export default Events;
