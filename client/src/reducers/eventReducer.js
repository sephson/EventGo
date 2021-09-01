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

export const deleteEventReducer = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_REQUEST":
      return { loading: true };
    case "DELETE_SUCCESS":
      return { loading: false, success: true };
    case "DELETE_FAILED":
      return { loading: false, error: action.payload };
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

export const myCreatedEventsReducers = (state = { myEvents: [] }, action) => {
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

export const freeRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case "FREE_EVENT_REG_REQUEST":
      return { loading: true };

    case "FREE_EVENT_REG_SUCCESS":
      return {
        loading: false,
        success: true,
        freeReg: action.payload,
      };

    case "FREE_EVENT_REG_FAILED":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const freeRegisterArrayReducer = (
  state = { freeRegistered: [] },
  action
) => {
  switch (action.type) {
    case "FREE_EVENT_ARR_REQUEST":
      return { ...state, loading: true };
    case "FREE_EVENT_ARR_SUCCESS":
      return {
        loading: false,
        success: true,
        freeRegistered: [...state.freeRegistered, action.payload],
      };

    case "FREE_EVENT_ARR_FAILED":
      return { loading: false, success: false, error: action.payload };

    default:
      return state;
  }
};

export const eventsIRegForReducer = (
  state = { iRegisteredFor: [] },
  action
) => {
  switch (action.type) {
    case "IREG_EVENT_FOR_REQUEST":
      return { loading: true };
    case "IREG_EVENT_FOR_SUCCESS":
      return {
        loading: false,
        iRegisteredFor: action.payload,
      };

    case "IREG_EVENT_FOR_FAILED":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const peopleRegisteredReducer = (
  state = { peopleRegistered: [] },
  action
) => {
  switch (action.type) {
    case "PEOPLE_REG_REQUEST":
      return { loading: true };
    case "PEOPLE_REG_SUCCESS":
      return {
        loading: false,
        peopleRegistered: action.payload,
      };

    case "PEOPLE_REG_FAILED":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
