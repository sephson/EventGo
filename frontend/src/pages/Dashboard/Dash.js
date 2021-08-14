import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dash } from "../../actions/userActions";
import {
  myCreatedEvent,
  deleteEvent,
  iRegForTheseEvents,
} from "../../actions/eventActions";
import "./Dash.css";
import DashNavbar from "../../components/DashNavbar/DashNavbar";
import DeleteIcon from "@material-ui/icons/Delete";
import Loading from "../../components/Loader/Loader";
import { Link } from "react-router-dom";

const Dash = ({ history }) => {
  const dispatch = useDispatch();

  // const userDash = useSelector((state) => state.userDash);
  // const { user } = userDash;
  // console.log(user);

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    if (!userInfo) return history.push("/sign-in");
    dispatch(dash(userInfo?.user._id));
  }, [dispatch, userInfo?.user._id, history, userInfo]);

  useEffect(() => {
    dispatch(myCreatedEvent(userInfo?.user._id));
  }, [dispatch, userInfo?.user._id]);

  const myCE = useSelector((state) => state.myCreatedEvent);
  const { myEvents, loading } = myCE;
  // console.log(myEvents);

  const iregFor = useSelector((state) => state.iRegFor);
  const { iRegisteredFor } = iregFor;

  useEffect(() => {
    dispatch(iRegForTheseEvents(userInfo?.user._id));
  }, [dispatch, userInfo?.user._id]);

  return (
    <div>
      <DashNavbar />
      <div className="dash-container event-details-container">
        <div className="manage-events">
          <div>
            <h4 className="header-left">Manage Events</h4>
            <>
              {loading ? (
                <Loading
                  type={"bars"}
                  color={"#ffb037"}
                  // width={"10%"}
                  // height={"50%"}
                />
              ) : (
                myEvents?.map((myEvent) => {
                  return (
                    <div className="myevent-events">
                      <Link
                        to={`/manage-event/${myEvent._id}/${myEvent.title}`}
                      >
                        <span className="myevent-events-title">
                          {myEvent.title}
                        </span>
                      </Link>
                      <DeleteIcon
                        onClick={() => {
                          dispatch(deleteEvent(myEvent._id));
                          window.location.reload();
                        }}
                        className="myevent-events-icon"
                      />
                    </div>
                  );
                })
              )}
            </>
          </div>
          <div>
            <h4 className="header-right">Events You Registered For</h4>
            <>
              {iRegisteredFor?.map((ireg) => {
                return (
                  <div className="myevent-events">
                    <Link to={`/event-details/${ireg.eventId}/${ireg.title}`}>
                      <span className="myevent-events-title">{ireg.title}</span>
                    </Link>
                  </div>
                );
              })}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
