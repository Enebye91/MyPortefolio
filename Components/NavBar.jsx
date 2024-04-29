import { Link } from "react-router-dom";
import "../src/assets/Nav.css";
import { useState } from "react";

export default function Nav() {
  const [active, setActive] = useState("nav_menu");
  const [icon, setIcon] = useState("nav_toggler");
  const navToggle = () => {
    if (active === "nav_menu") {
      setActive("nav_menu nav_active");
    } else setActive("nav_menu");

    if (icon === "nav_toggler") {
      setIcon("nav_toggler toggle");
    } else setIcon("nav_toggler");
  };

  return (
    <>
      <nav className="nav">
        <img src="" alt="" className="logo" />
        <ul className={active}>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Portfolio">Portfolio</Link>
          </li>
          {/* <li>
            <Link to="contact">Contact</Link>
          </li> */}
        </ul>

        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
}
