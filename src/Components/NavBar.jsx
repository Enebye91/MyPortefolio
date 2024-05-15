import { Link } from "react-router-dom";
import "../assets/Nav.css";
import { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const Menu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`nav-container ${menuOpen ? "active" : ""}`}>
      <div className="nav_bar">
        <div className="menu">
          <Link to="/LandingPage" className="logo-link">
            <h3 className="site-logo">
              VEL<span>Design</span>
            </h3>
          </Link>
          <div className="burger-menu" onClick={Menu}>
            <div className="menu-bar"></div>
          </div>
        </div>
      </div>

      <div className={`nav-links ${menuOpen ? "menu-open" : ""}`}>
        <ul>
          <li>
            <Link to="/LandingPage" style={{ "--i": "0.05s" }} onClick={Menu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" style={{ "--i": "0.10s" }} onClick={Menu}>
              About
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              style={{ "--i": "0.15s" }}
              onClick={Menu}>
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

