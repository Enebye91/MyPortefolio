import { Navigate, Route, Routes } from "react-router-dom";
import About from "./Pages/AboutPage";
import LandingPage from "./Pages/LandingPage";
import Portfolio from "./Pages/PortfolioPage";
// import Contact from "../Pages/Contact";
import Cases from "./Pages/CasesPage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/cases" element={<Cases />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
