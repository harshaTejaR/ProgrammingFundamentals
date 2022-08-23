import "./App.css";
import Scope from "../src/Basics/Scope";
import Function from "./Basics/Function";
import Destructure from "./Basics/Destructuring";
import ResponsiveAppBar from "./Components/MainHeader";

function App() {

  return (
    <>
      <ResponsiveAppBar/>
      <Scope />
      <Function />
      <Destructure />
    </>
  );
}

export default App;
