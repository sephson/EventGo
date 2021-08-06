import React from "react";
import "./EventDetails.css";
import picture1 from "../../images/picture1.jpg";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const EventDetails = () => {
  return (
    <>
      <div className="event-details-container">
        <div className="left-side-nav">
          <Link to="/">
            <h1 className="navbarLogo">eventgo</h1>
          </Link>
        </div>

        <div className="event-det-wrap">
          <div className="event-image-wrap">
            <img className="event-details-art " src={picture1} alt="eventart" />
            <p className="event-description">
              So how did the classical Latin become so incoherent? According to
              McClintock, a 15th century typesetter likely scrambled part of
              Cicero's De Finibus in order to provide placeholder text to mockup
              various fonts for a type specimen book. It's difficult to find
              examples of lorem ipsum in use before Letraset made it popular as
              a dummy text in the 1960s, although McClintock says he remembers
              coming across the lorem ipsum passage in a book of old metal type
              samples. So far he hasn't relocated where he once saw the passage,
              but the popularity of Cicero in the 15th century supports the
              theory that the filler text has been used for centuries
            </p>
          </div>

          <main className=" main-event-det">
            <h3 className="">WHY DID I GET MARRIED?</h3>
            <h4 className="">12th Aug, 2020. 9:00am</h4>
            <p className="">THE CONSORT LUXURY SUITES #Plot 799 Abuja</p>
            <em className="">The Chayil Lady Ministry</em>
            <p>Free</p>
            <button className="event-reg-btn">Register</button>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventDetails;
