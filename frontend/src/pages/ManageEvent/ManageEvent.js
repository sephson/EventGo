import React, { useEffect } from "react";
import "./ManageEvent.css";
import { peopleRegisteredList } from "../../actions/eventActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import date from "date-and-time";
import Navbar from "../../components/Navbar/Navbar";
import Loading from "../../components/Loader/Loader";

const ManageEvent = ({ history }) => {
  const dispatch = useDispatch();
  const eventId = useParams().eventId;
  const title = useParams().title;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const xx = useSelector((state) => state.peopleRegList);
  const { peopleRegistered = [], loading } = xx;

  useEffect(() => {
    if (!userInfo) return history.push("/sign-in");
    dispatch(peopleRegisteredList(eventId));
  }, [dispatch, eventId, history, userInfo]);

  return (
    <div>
      <Navbar />
      <div className="event-list-container">
        <h4 style={{ color: "#ffb037" }}>{title}</h4>
        {loading ? (
          <Loading type={"bars"} color={"#ffb037"} />
        ) : peopleRegistered.length === 0 ? (
          "No One Has Registered for your event"
        ) : (
          peopleRegistered.map((people) => {
            return (
              <div className="registered-users-info">
                <p>{people.username}</p>
                <p>{people.email}</p>
                <p className="reg-users-info-date">
                  {date.format(new Date(people.createdAt), "ddd, MMM DD YYYY")}
                </p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ManageEvent;
