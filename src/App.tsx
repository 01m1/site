import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <Router basename="/site">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
