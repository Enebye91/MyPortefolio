import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import About from "../Pages/AboutPage";
import Portfolio from "../Pages/PortfolioPage";
import Case from "../Pages/CasePage";
// import Contact from "../Pages/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Case" element={<Case />} />
        {/* <Route path="/Contact" element={<Contact />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;