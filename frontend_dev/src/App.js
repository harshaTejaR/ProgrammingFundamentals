import "./App.css";
import Scope from "../src/Basics/Scope";
import Function from "./Basics/Function";
import Destructure from "./Basics/Destructuring";
import Array from "./Basics/Array";
import Pagination from "./Basics/ClassComponents/ClassComponent";
import CountdownTimer from "./CountDown";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainHeader from "./Components/MainHeader";

function App() {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <div className="App">
      <MainHeader />
      <Router>
        <Switch>
          <Route path="/counter">
            <CountdownTimer targetDate={dateTimeAfterThreeDays} />
          </Route>
          <Route path="/scope">
            <Scope />
          </Route>
          <Route path="/Function">
            <Function />
          </Route>
          <Route path="/destructure">
            <Destructure />
          </Route>
          <Route path="/array">
            <Array />
          </Route>
          <Route path="/scope">
            <Pagination />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
