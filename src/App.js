import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Projects, Photography, Cv } from "./components";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/cv" exact component={() => <Cv />} />
          <Route path="/photography" exact component={() => <Photography />} />
          <Route path="/projects" exact component={() => <Projects />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
