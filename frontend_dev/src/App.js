import "./App.css";
import Scope from "../src/Basics/Scope";
import Function from "./Basics/Function";
import Destructure from "./Basics/Destructuring";

function App() {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <>
      <Scope />
      <Function />
      <Destructure />
    </>
  );
}

export default App;
