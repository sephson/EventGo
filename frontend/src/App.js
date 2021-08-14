// import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import CreateEvent from "./pages/CreateEvent/CreateEvent";
import EventDetails from "./pages/EventDetails/EventDetails";
import Dash from "./pages/Dashboard/Dash";
import RegSuccess from "./pages/RegisteredSuccess/RegSuccess";
import ManageEvent from "./pages/ManageEvent/ManageEvent";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/create-event" component={CreateEvent} />
          <Route
            path="/event-details/:eventId/:title"
            component={EventDetails}
          />
          <Route path="/dashboard" component={Dash} />
          <Route path="/reg-success/:freeRegId" component={RegSuccess} />
          <Route path="/manage-event/:eventId/:title" component={ManageEvent} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
