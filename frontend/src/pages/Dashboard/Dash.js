import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dash } from "../../actions/userActions";
import "./Dash.css";

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

  return (
    <div>
      <h1>Dashboard restricted </h1>
    </div>
  );
};

export default Dash;
