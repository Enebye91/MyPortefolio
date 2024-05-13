import { useState } from "react";
import { Link } from "react-router-dom";
import "../src/assets/NavBar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`container ${menuOpen ? "aktiv" : ""}`}>
      <div className="navbar">
        <div className="menu">
          <Link to="/LandingPage" className="Logo_span">
            <h3 className="logo">
              VEL<span>Design</span>
            </h3>
          </Link>
          <div className="hamburger-menu" onClick={toggleMenu}>
            <div className="bar"></div>
          </div>
        </div>
      </div>

      <div className={`links ${menuOpen ? "menu-open" : ""}`}>
        <ul>
          <li>
            <Link
              to="/LandingPage"
              style={{ "--i": "0.05s" }}
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" style={{ "--i": "0.10s" }} onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Portfolio"
              style={{ "--i": "0.15s" }}
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
            {/* <li>
              <Link to="/Case" style={{ "--i": "0.10s" }} onClick={toggleMenu}>
                Cases
              </Link>
            </li> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

Navbar.jsx;
