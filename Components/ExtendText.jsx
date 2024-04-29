import { useState, useRef, useEffect } from "react";
import "../src/assets/ExtendText.css";
import InfoSection from "../Components/InfoSection";
import Footer from "../Components/Footer";

export default function ExtendText() {
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
    <section className="TextBtn_wrapper">
      <article>
        <button
          style={{
            background: "transparent",
            border: "none",
            textDecoration: "underline",
            fontSize: "20px",
            color: "var(--cream)",
            cursor: "pointer",
          
          }}
          onClick={toggleSection}
        >
         Read more about me
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