import React, { useEffect } from "react";
import "./ManageEvent.css";
import { peopleRegisteredList } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ManageEvent = () => {
  const dispatch = useDispatch();
  const eventId = useParams().eventId;

  const xx = useSelector((state) => state.peopleRegList);
  const { peopleRegistered } = xx;
  console.log(peopleRegistered);

  useEffect(() => {
    dispatch(peopleRegisteredList(eventId));
  }, [dispatch]);

  return (
    <div>
      <h1>ManageEvents</h1>
    </div>
  );
};

export default ManageEvent;
