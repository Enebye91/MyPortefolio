import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/CircleButton.css";

export default function CircleWithSection() {
  const [showSection, setShowSection] = useState(false);
  const sectionRef = useRef(null);

  const toggleSection = () => {
    setShowSection(!showSection);
  };

  useEffect(() => {
    if (showSection) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showSection]);

  return (
    <section className="Circle_wrapper">
      <article className="Circle_container"></article>
      {showSection && <SectionToShow sectionRef={sectionRef} />}
    </section>
  );
}

function SectionToShow({ sectionRef }) {
  const [fadeDivs, setFadeDivs] = useState(false);

  useEffect(() => {
    if (sectionRef.current) {
      const timeout = setTimeout(() => {
        setFadeDivs(true);
      }, 100); // Adjust timing as needed
      return () => clearTimeout(timeout);
    }
  }, [sectionRef]);

  return (
    <div className="Newer_section">
      <section className="Navigation_wrapper" ref={sectionRef}>
        {fadeDivs && (
          <FadeInDiv delay={0}>
            <li>
              <Link to="About">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className="contact-text">About</div>
                </div>
              </Link>
            </li>
          </FadeInDiv>
        )}
        {fadeDivs && (
          <FadeInDiv delay={0}>
            <li>
              <Link to="Portfolio">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className="contact-text">Portfolio</div>
                </div>
              </Link>
            </li>
          </FadeInDiv>
        )}
        {fadeDivs && (
          <FadeInDiv delay={0}>
            <li>
              <Link to="Contact">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className="contact-text">Contact</div>
                </div>
              </Link>
            </li>
          </FadeInDiv>
        )}
      </section>

      <section className="Next_section"></section>
    </div>
  );
}

function FadeInDiv({ children, delay }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div style={{ opacity: show ? 1 : 0, transition: "opacity 0.5s" }}>
      {children}
    </div>
  );
}
