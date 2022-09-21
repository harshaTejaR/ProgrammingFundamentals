import "./App.css";
import Header from "./Components/MainHeader";
import ContactForm from "./Components/contactForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "./Pages/AboutMePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/about">
              <AboutPage />
      
            </Route>
            <Route exact path="/contact">
              <ContactForm />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
