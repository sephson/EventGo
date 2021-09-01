import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CreateEvent.css";
import { useDispatch, useSelector } from "react-redux";
import BackupIcon from "@material-ui/icons/Backup";
import axios from "axios";
import { createEvent } from "../../actions/eventActions";

const CreateEvent = ({ history }) => {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const fileInputRef = useRef();
  const [title, setTitle] = useState("");
  const [organiser, setOrganiser] = useState("");
  const [location, setLocation] = useState("");
  const [online, setOnline] = useState("");
  const [startDate, setStartDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endDate, setEndDate] = useState();
  const [endTime, setEndTime] = useState();
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [view, setView] = useState();
  const [disabled, setDisable] = useState(true);
  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    if (!userInfo) return history.push("/sign-in");
  }, [history, userInfo]);

  const addPhotoHandler = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const imageInputHandler = async (e) => {
    const file = e.target.files[0];
    file ? setImage(file) : setImage(null);
    file ? setView(file) : setView(null);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/upload", formData, config);
      setImage(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (view) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };

      reader.readAsDataURL(view);
    } else setPreview(null);
  }, [view]);

  const createEventHandler = (e) => {
    e.preventDefault();
    dispatch(
      createEvent(
        userInfo.user._id,
        title,
        organiser,
        location,
        online,
        startDate,
        startTime,
        endDate,
        endTime,
        image,
        description,
        price
      )
    );
  };

  const cr = useSelector((state) => state.createEvent);
  const { loading, success } = cr;

  const lengthHandler = (e) => {
    if (
      description.length < 2 ||
      title.length < 2 ||
      organiser.length < 2 ||
      (location || online).length < 2 ||
      image < 2 ||
      startDate < 2 ||
      startTime < 2
    )
      setDisable(true);
    else {
      setDisable(false);
    }
    console.log(description.length);
  };

  useEffect(() => {
    if (success === true) {
      // history.push("/dashboard");
      document.location.href = "/dashboard";
    } else {
      return "Failed to publish";
    }
  }, [success, history]);

  return (
    <div className="create-event">
      <div className="left-side-nav">
        <Link to="/">
          <h1 className="navbarLogo">eventgo</h1>
        </Link>
      </div>

      <form
        onChange={lengthHandler}
        onSubmit={createEventHandler}
        className="event-info"
      >
        <div className="basic-info">
          <h1>Basic Info</h1>
          <input
            className="event-info-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Event Title"
          />
          <input
            value={organiser}
            onChange={(e) => setOrganiser(userInfo.user.username)}
            className="event-info-input"
            placeholder="Organiser"
          />
        </div>
        <h3 className="event-info-location">Location</h3>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          placeholder="Location"
          className="event-info-input"
        />
        <input
          value={online}
          onChange={(e) => setOnline(e.target.value)}
          type="text"
          placeholder="Online Link"
          className="event-info-input"
        />

        <h3 className="event-info-location">Date and Time</h3>
        <p>
          Let the people who would attend your event when know when your event
          starts
        </p>
        <div className="dandt">
          <div className="starts one-day">
            <input
              className="event-info-input"
              type="date"
              placeholder="Event Date (starts)"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <input
              className="event-info-input"
              type="time"
              placeholder="Event Time (starts)"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>
          <div className="end">
            <input
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="event-info-input"
              type="date"
              placeholder="Event Date (ends)"
            />
            <input
              className="event-info-input"
              type="time"
              placeholder="Event Time (end)"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
        </div>

        <h1>Main Event</h1>
        <div className="main-event">
          <input
            style={{ display: "none" }}
            type="file"
            classname="img"
            name="img"
            accept="image/*"
            ref={fileInputRef}
            onChange={imageInputHandler}
          />
          <div className="image-prev">
            {preview ? (
              <img
                src={preview}
                alt="imag-prev"
                className="preview-image"
                onClick={() => setImage(null)}
              />
            ) : (
              <button onClick={addPhotoHandler} className="event-btn">
                event art
                <BackupIcon className="upload-icon" />
              </button>
            )}
          </div>

          <textarea
            rows="10"
            cols="10"
            className="event-info-input textarea"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="event-info-input"
            type="number"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button disabled={disabled} type="submit" className="publish">
            {loading ? "publishing..." : "Publish"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
