import React, { useEffect } from "react";
import "./EventDetails.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import {
  eventDetailInfo,
  freeEventReg,
  addRegisteredUserToEventArray,
} from "../../actions/eventActions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const EventDetails = ({ history }) => {
  const eventId = useParams().eventId;
  const title = useParams().title;
  const price = useParams().price;

  const dispatch = useDispatch();

  const eventDetail = useSelector((state) => state.eventDetail);
  const { details } = eventDetail;
  // console.log(details);

  useEffect(() => {
    dispatch(eventDetailInfo(eventId));
  }, [dispatch, eventId]);

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const free = useSelector((state) => state.freeEvent);
  const { loading, freeReg, error } = free;

  const freeArr = useSelector((state) => state.freeEventArr);
  const { success } = freeArr;

  const handleFreeReg = () => {
    if (!userInfo) {
      history.push(`/sign-in`);
    }
    dispatch(
      freeEventReg(
        userInfo?.user._id,
        eventId,
        userInfo?.user.username,
        title,
        userInfo?.user.email
      )
    );
    dispatch(addRegisteredUserToEventArray(eventId, userInfo?.user._id));
  };

  useEffect(() => {
    if (freeReg?._id) {
      history.push(`/reg-success/${freeReg?._id}`);
    }
  }, [history, success, error, freeReg?._id]);

  console.log(freeReg);

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
            <h3 className="event-det-header">{details.title}</h3>
            {details.endDate && details.endTime ? (
              <>
                <p className="event-det">
                  {details.startDate}
                  {`-${details.endDate}`}
                </p>
                <p className="event-det">
                  {details.startTime}
                  {`-${details.endTime}`}
                </p>
              </>
            ) : (
              <>
                <p className="event-det">Starts: {details.startDate}</p>
                <p className="event-det">Time: {details.startTime}</p>
              </>
            )}

            <p className="event-det">
              {details.location ? details.location : "Online"}
            </p>
            <em className="event-det">{details?.organiser}</em>
            <p>
              {details?.price === 0 || details?.price === null
                ? "Free"
                : `₦${details.price}`}
            </p>
            {console.log(details)}
            {details?.freeRegistered?.includes(userInfo?.user._id) ? (
              <h3 style={{ color: "red" }}>
                YOU HAVE REGISTERED FOR THIS EVENT
              </h3>
            ) : (
              <>
                {details?.price === 0 || details?.price === null ? (
                  <button onClick={handleFreeReg} className="event-reg-btn">
                    {loading ? "Registering" : "Register"}
                  </button>
                ) : (
                  <Link to={`/${eventId}/${title}/${price}/checkout`}>
                    <button className="event-reg-btn">
                      Pay {`₦${details.price}`}
                    </button>
                  </Link>
                )}
              </>
            )}

            {/* {details.price === 0 || details.price === null ? (
              <button onClick={handleFreeReg} className="event-reg-btn">
                {loading ? "Registering" : "Register"}
              </button>
            ) : (
              <button className="event-reg-btn">
                Pay {`₦${details.price}`}
              </button>
            )} */}
            {error ? "Failed" : ""}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventDetails;
