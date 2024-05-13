import { Link } from "react-router-dom";
import "../src/assets/Nav.css";
import { useState } from "react";

// export default function Nav() {
//   const [active, setActive] = useState("nav_menu");
//   const [icon, setIcon] = useState("nav_toggler");
//   const navToggle = () => {
//     if (active === "nav_menu") {
//       setActive("nav_menu nav_active");
//     } else setActive("nav_menu");

//     if (icon === "nav_toggler") {
//       setIcon("nav_toggler toggle");
//     } else setIcon("nav_toggler");
//   };

//   return (
//     <>
//       <nav className="nav">
//         <Link to="/LandingPage">
//           <h3 className="logo">
//             VEL<span>Design</span>
//           </h3>
//         </Link>
//         <ul className={active}>
//         <li>
//             <Link to="/LandingPage">Home</Link>
//           </li>
//           <li>
//             <Link to="/About">About</Link>
//           </li>
//           <li>
//             <Link to="/Portfolio">Portfolio</Link>
//           </li>
//           <li>
//             <Link to="/Case">Cases</Link>
//           </li>
          
//         </ul>

//         <div onClick={navToggle} className={icon}>
//           <div className="line1"></div>
//           <div className="line2"></div>
//           <div className="line3"></div>
//         </div>
//       </nav>
//     </>
//   );
// }

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Menu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`nav-container ${isOpen ? "active" : ""}`}>
      <div className="nav_bar">
        <div className="menu">
          <Link to="/LandingPage" className="logo-link">
            <h3 className="site-logo">
              VEL<span>Design</span>
            </h3>
          </Link>
          <div className="hamburger-menu" onClick={Menu}>
            <div className="menu-bar"></div>
          </div>
        </div>
      </div>

      <div className={`nav-links ${isOpen ? "menu-open" : ""}`}>
        <ul>
          <li>
            <Link to="/LandingPage" style={{ "--delay": "0.05s" }} onClick={Menu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" style={{ "--delay": "0.10s" }} onClick={Menu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/Portfolio" style={{ "--delay": "0.15s" }} onClick={Menu}>
              Portfolio
            </Link>
          </li>
          {/* <li>
            <Link to="/Case" style={{ "--delay": "0.10s" }} onClick={Menu}>
              Cases
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;

