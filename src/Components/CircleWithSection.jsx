import { useState, useRef, useEffect } from "react";
import "../assets/ExtendButton.css";
import Paragraf from "../Components/Paragraf";
import ContactSection from "../Components/ContactSection";
import Footer from "../Components/Footer";

export default function CircleButton() {
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
    <section className="CircleBTN_wrapper">
      <article>
        <button
          className={showSection ? "expanded" : ""}
          style={{
            margin: "20px",
            borderRadius: "50%",
            backgroundColor: "var(--DarkGreen)",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            textDecoration: "none",
            textAlign: "center",
            width: "100px",
            maxWidth: "150px",
            height: "100px",
            filter: "drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.2))"
          }}
          onClick={toggleSection}>
          More
        </button>
      </article>

      {showSection && <SectionToShow sectionRef={sectionRef} />}
    </section>
  );
}

function SectionToShow({ sectionRef }) {
  return (
    <div>
      <section className="Newest_section" ref={sectionRef}>
        <article className="teas_wrapper">
          <div className="teas_container">
            <article>
              <Paragraf
                paragraf="I craft innovative solutions where design and code meet, 
              contributing to shaping the future of web experinences"
              />
            </article>
            <aside>
              <Paragraf
                paragraf="As a student, I explore how design, 
              coding and user experinence merge to create a fresh 
              approach to web design, blending creativity with technical skills"
              />
            </aside>
          </div>
        </article>
        <ContactSection />
        <Footer />
      </section>
    </div>
  );
}
