export const userSignUpReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_SIGNUP_REQUEST":
      return { loading: true };

    case "USER_SIGNUP_SUCCESS":
      return { loading: false, userInfo: action.payload };

    case "USER_SIGNUP_FAILED":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userSignInReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_SIGNIN_REQUEST":
      return { loading: true };

    case "USER_SIGNIN_SUCCESS":
      return { loading: false, userInfo: action.payload };

    case "USER_SIGNIN_FAILED":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
