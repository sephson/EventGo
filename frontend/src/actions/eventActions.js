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
