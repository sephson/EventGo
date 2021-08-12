export const createEventReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_EVENT_REQUEST":
      return { loading: true };

    case "CREATE_EVENT_SUCCESS":
      return { loading: false, success: true, event: action.payload };

    case "CREATE_EVENT_FAILED":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
