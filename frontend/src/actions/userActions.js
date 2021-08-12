import axios from "axios";
export const signup = (username, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_SIGNUP_REQUEST",
    });
    const config = {
      "Content-Type": "application/json",
    };

    const { data } = await axios.post(
      "/users/signup",
      { username, email, password },
      config
    );

    dispatch({
      type: "USER_SIGNUP_SUCCESS",
      payload: data,
    });

    dispatch({
      type: "USER_SIGNIN_SUCCESS",
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: "USER_SIGNUP_FAIL",
      payload: error.message,
    });
  }
};

export const signin = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_SIGNIN_REQUEST",
    });
    const config = {
      "Content-Type": "application/json",
    };

    const { data } = await axios.post(
      "/users/signin",
      { email, password },
      config
    );

    dispatch({
      type: "USER_SIGNIN_SUCCESS",
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: "USER_SIGNIN_FAILED",
      payload: error,
    });
  }
};

//for dashboard
export const dash = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "USER_DASH_REQUEST",
    });

    const {
      userSignin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorisation: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/users/dashboard/${id}`, config);

    dispatch({
      type: "USER_DASH_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "USER_DASH_FAILED",
      payload: error,
    });
  }
};
