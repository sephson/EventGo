import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userSignInReducer,
  userSignUpReducer,
  userDashboardReducer,
} from "./reducers/userReducer";
import {createEventReducer} from "./reducers/eventReducer"

const reducer = combineReducers({
  userSignup: userSignUpReducer,
  userSignin: userSignInReducer,
  userDash: userDashboardReducer,
  createEvent: createEventReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userSignin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
