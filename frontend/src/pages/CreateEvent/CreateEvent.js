import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CreateEvent.css";
import BackupIcon from "@material-ui/icons/Backup";

const CreateEvent = () => {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const fileInputRef = useRef();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };

      reader.readAsDataURL(image);
    } else setPreview(null);
  }, [image]);

  const addPhotoHandler = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const imageInputHandler = (e) => {
    const file = e.target.files[0];
    file ? setImage(file) : setImage(null);
  };

  return (
    <div className="create-event">
      <div className="left-side-nav">
        <Link to="/">
          <h1 className="navbarLogo">eventgo</h1>
        </Link>
      </div>

      <form className="event-info">
        <div className="basic-info">
          <h1>Basic Info</h1>
          <input className="event-info-input" placeholder="Event Title" />
          <input className="event-info-input" placeholder="Organiser" />
        </div>
        <h3 className="event-info-location">Location</h3>
        <span className="online-or-venue">Venue</span>
        <span className="online-or-venue online">Online</span>

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
            />
            <input
              className="event-info-input"
              type="time"
              placeholder="Event Time (starts)"
            />
          </div>
          <div className="end">
            <input
              className="event-info-input"
              type="date"
              placeholder="Event Date (ends)"
            />
            <input
              className="event-info-input"
              type="time"
              placeholder="Event Time (end)"
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
          />
          <input
            className="event-info-input"
            type="number"
            placeholder="price"
          />
          <button className="publish">Publish</button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
