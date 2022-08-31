import "./App.css";
import Scope from "../src/Basics/Scope";
import Function from "./Basics/Function";
import Destructure from "./Basics/Destructuring";
import ResponsiveAppBar from "./Components/MainHeader";
import Array from "./Basics/Array";
function App() {

  return (
    <>
      <ResponsiveAppBar/>
      <Array/>
      <Scope />
      <Function />
      <Destructure />
    </>
  );
}

export default App;
