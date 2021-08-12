export const createEventReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_EVENT_REQUEST":
      return { loading: true };

    case "CREATE_EVENT_SUCCESS":
      return { loading: false, success: true, event: action.payload };

    case "CREATE_EVENT_FAILED":
      return { loading: false, success: false, error: action.payload };

    default:
      return state;
  }
};

export const allEventReducer = (state = { event: [] }, action) => {
  switch (action.type) {
    case "ALL_EVENT_REQUEST":
      return { loading: true, event: [] };

    case "ALL_EVENT_SUCCESS":
      return { loading: false, success: true, event: action.payload };

    case "ALL_EVENT_FAILED":
      return { loading: false, success: false, error: action.payload };

    default:
      return state;
  }
};

export const eventDetailsReducer = (state = { details: {} }, action) => {
  switch (action.type) {
    case "EVENT_DETAILS_REQUEST":
      return { ...state, loading: true };

    case "EVENT_DETAILS_SUCCESS":
      return {
        loading: false,
        success: true,
        details: action.payload,
      };

    case "EVENT_DETAILS_FAILED":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const myCreatedEventsReducers = (state = {myEvents : []}, action) => {
  switch (action.type) {
    case "MYEVENT_REQUEST":
      return { loading: true };

    case "MYEVENT_SUCCESS":
      return {
        loading: false,
        success: true,
        myEvents: action.payload,
      };

    case "MYEVENT_FAILED":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
