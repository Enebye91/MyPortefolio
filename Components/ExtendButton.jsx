import { useState, useRef, useEffect } from "react";
import "../src/assets/ExtendButton.css";
import InfoSection from "../Components/InfoSection";
import Footer from "../Components/Footer";

export default function ExtendButton() {
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
      <article>
        <button
          style={{
            marginBottom: "10px",
            borderRadius: "50px",
            backgroundColor: "var(--black)",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            textDecoration: "none",
            textAlign: "center",
            width: "100%",
            maxWidth: "150px",
            height: "6vh",
          }}
          onClick={toggleSection}
        >
         Read more
        </button>
      </article>

      {showSection && <SectionToShow sectionRef={sectionRef} />}
    </section>
  );
}

function SectionToShow({ sectionRef }) {
  return (
    <div>
      <section className="New_section" ref={sectionRef}>
        <InfoSection />
        <Footer/>
      </section>
     
    </div>
  );
}
