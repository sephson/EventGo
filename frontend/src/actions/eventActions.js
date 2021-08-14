import axios from "axios";
export const createEvent =
  (
    userId,
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
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: "CREATE_EVENT_REQUEST",
      });

      const {
        userSignin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorisation: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/event/publish`,
        {
          userId,
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
          price,
        },
        config
      );

      dispatch({
        type: "CREATE_EVENT_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "CREATE_EVENT_FAILED",
        payload: error.message,
      });
    }
  };

export const allEvents = () => async (dispatch) => {
  try {
    dispatch({
      type: "ALL_EVENT_REQUEST",
    });

    const config = {
      "Content-Type": "application/json",
    };

    const { data } = await axios.get(`/event/all-events`, config);

    dispatch({
      type: "ALL_EVENT_SUCCESS",
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: "ALL_EVENT_FAILED",
      payload: e,
    });
  }
};

export const eventDetailInfo = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "EVENT_DETAILS_REQUEST",
    });

    const config = {
      "Content-Type": "application/json",
    };

    const { data } = await axios.get(`/event/event-details/${id}`, config);

    dispatch({
      type: "EVENT_DETAILS_SUCCESS",
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: "EVENT_DETAILS_FAILED",
      payload: e,
    });
  }
};

export const deleteEvent = (eventId) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_REQUEST",
    });

    const config = {
      "Content-Type": "application/json",
    };

    await axios.delete(`/event/delete/${eventId}`, config);

    dispatch({
      type: "DELETE_SUCCESS",
    });
  } catch (e) {
    dispatch({
      type: "DELETE_FAILED",
      payload: e,
    });
  }
};

export const myCreatedEvent = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: "MYEVENT_REQUEST",
    });

    const config = {
      "Content-Type": "application/json",
    };

    const { data } = await axios.get(`/event/events-created/${userId}`, config);

    dispatch({
      type: "MYEVENT_SUCCESS",
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: "MYEVENT_FAILED",
      payload: e,
    });
  }
};

export const freeEventReg =
  (userId, eventId, username, title, email) => async (dispatch) => {
    try {
      dispatch({
        type: "FREE_EVENT_REG_REQUEST",
      });

      const config = {
        "Content-Type": "application/json",
      };

      const { data } = await axios.post(
        `/event/free-register-event/${eventId}`,
        { userId, username, title, email },
        config
      );

      dispatch({
        type: "FREE_EVENT_REG_SUCCESS",
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: "FREE_EVENT_REG_FAILED",
        payload: e,
      });
    }
  };

export const addRegisteredUserToEventArray =
  (eventId, userId) => async (dispatch) => {
    try {
      dispatch({
        type: "FREE_EVENT_ARR_REQUEST",
      });

      const config = {
        "Content-Type": "application/json",
      };

      const { data } = await axios.put(
        `/event/free-register-event-array/${eventId}`,
        { userId },
        config
      );

      dispatch({
        type: "FREE_EVENT_ARR_SUCCESS",
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: "FREE_EVENT_ARR_FAILED",
        payload: e,
      });
    }
  };

export const iRegForTheseEvents = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: "IREG_EVENT_FOR_REQUEST",
    });

    const config = {
      "Content-Type": "application/json",
    };

    const { data } = await axios.get(
      `/event/events-i-registered-for/${userId}`,
      config
    );

    dispatch({
      type: "IREG_EVENT_FOR_SUCCESS",
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: "IREG_EVENT_FOR_FAILED",
      payload: e,
    });
  }
};

export const peopleRegisteredList = (eventId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "PEOPLE_REG_REQUEST",
    });

    const {
      userSignin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorisation: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/people-who-registered-for-my-event/${eventId}`, config);

    dispatch({
      type: "PEOPLE_REG_SUCCESS",
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: "PEOPLE_REG_FAILED",
      payload: error.message,
    });
  }
};
