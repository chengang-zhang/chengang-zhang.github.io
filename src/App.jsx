import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Footer, Home, Projects, Photography, Cv } from "./components";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
