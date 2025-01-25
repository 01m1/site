import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/site" element={<Home />} />
        <Route path="/new" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
