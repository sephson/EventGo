import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dash } from "../../actions/userActions";
import { myCreatedEvent, deleteEvent } from "../../actions/eventActions";
import "./Dash.css";
import DashNavbar from "../../components/DashNavbar/DashNavbar";
import DeleteIcon from "@material-ui/icons/Delete";
import Loading from "../../components/Loader/Loader";

const Dash = ({ history }) => {
  const dispatch = useDispatch();

  const userDash = useSelector((state) => state.userDash);
  const { user } = userDash;
  console.log(user);

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

  return (
    <div>
      <DashNavbar />
      <div className="dash-container event-details-container">
        <h1 className="dashboard">Dashboard </h1>
        <div className="manage-events">
          <div>
            <h3 className="header-left">Manage Events</h3>
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
                      <span className="myevent-events-title">
                        {myEvent.title}
                      </span>
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
            <h3 className="header-right">Events You Registered For</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
