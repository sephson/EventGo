import React, { useEffect } from "react";
import "./EventDetails.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { eventDetailInfo } from "../../actions/eventActions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const EventDetails = () => {
  const eventId = useParams().eventId;

  const dispatch = useDispatch();

  const eventDetail = useSelector((state) => state.eventDetail);
  const { loading, details, error } = eventDetail;
  console.log(details);

  useEffect(() => {
    dispatch(eventDetailInfo(eventId));
  }, [dispatch, eventId]);

  return (
    <>
      <Navbar />
      <div className="event-details-container">
        <div className="event-det-wrap">
          <div className="event-image-wrap">
            <img
              className="event-details-art "
              src={details.image}
              alt="eventart"
            />
            <p className="event-description">{details.description}</p>
          </div>

          <main className=" main-event-det">
            <h3 className="">{details.title}</h3>
            <p className="">{details.startDate}</p>
            <p className="">{details.startTime}</p>
            <p className="">{details.endDate}</p>
            <p className="">{details.endTime}</p>
            <p className="">{details.location ? details.location : "Online"}</p>
            <em className="">{details.organiser}</em>
            <p>
              {details.price === 0 || details.price === null
                ? "Free"
                : `₦${details.price}`}
            </p>
            <button className="event-reg-btn">Register</button>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventDetails;
