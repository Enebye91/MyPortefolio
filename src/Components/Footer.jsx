import "../assets/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="Footer_wrapper">
      <div className="Footer_container">
        <div className="kasse">
          <h7>Version</h7>
          <ul>
            <li>© 2024 VEL design</li>
          </ul>
        </div>
        <div className="kasse">
          <h7>Contact</h7>
          <ul>
            <li>
            <a href="tel:+4520617459">+45 20 61 74 59</a>
            </li>
            <li>
            <a href="mailto:michellevel91@gmail.com">michellevel91@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="kasse">
          <h7>Site map</h7>
          <ul>
            <Link to="About">About</Link>
            <Link to="Portfolio">Portfolio</Link>
          </ul>
        </div>
        <div className="kasse">
          <h7>Socials</h7>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/michelle-v-johansen
">
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/Enebye91">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
