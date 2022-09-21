import "./App.css";
import ResponsiveAppBar from "./Components/MainHeader";
import ContactForm from "./Components/contactForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "./Pages/AboutMePage";

function App() {
  return (
    <Router>
      <div className="App">
        <ResponsiveAppBar />
        <div className="content">
          <Switch>
            <Route path="/contact">
              <ContactForm />
            </Route>

            <Route path="/about">
              <AboutPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
