import { useRef, useEffect } from "react";
// import web from "../src/images/web.svg";
// import web from "../src/images/www.png";
import "../src/assets/InfoSection.css";
import OverskriftThree from "../Components/OverskriftThree";

const InfoSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 0) {
        section.classList.add("visible");
      } else {
        section.classList.remove("visible");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="info_wrapper">
      <div className="info_container">
        <article
          className="content_article"
          style={{
            backgroundColor: "transparent",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          {/* <img src={web} alt="My Image" id="web-image" /> */}
          <OverskriftThree overskriftThree="What I do" />
        </article>

        <article className="content_article" style={{ backgroundColor: "" }}>
          <OverskriftThree overskriftThree="Webdevelopment" />
          <p
            style={{
              fontweight: "400",
              fontSize: "18px",
              letterSpacing: "1px",
              color: "var(--cream)",
            }}
          >
            
            Design and implementation of websites and web applications. I focus
            on creating user-friendly and responsive interfaces with micro
            animation and interaction.
          </p>
        </article>
        <aside className="content_aside" style={{ backgroundColor: "" }}>
          <OverskriftThree overskriftThree="Frontend" />

          <p
            style={{
              fontSize: "18px",
              color: "var(--cream)",
            }}
          >
            Bringing websites and applications to life through interactivity and
            dynamic features paved the way for me to pursue a path in
            Frontend development.
            Responsive design and interactivity are essential elements for
            creating an engaging and user-friendly experience.
          </p>
        </aside>
        <aside className="content_aside" style={{ backgroundColor: "almond" }}>
          <OverskriftThree overskriftThree="SmartSolution" />
          <p
            style={{
              fontSize: "18px",
              color: "var(--cream)",
            }}
          >
            When it comes to developing smart solutions for creating interactive 
            and immersive web experiences, integrating Unity to produce 3D visualizations 
            that can be run directly in the web browser is beneficial.
    
          </p>
        </aside>
      </div>
    </section>
  );
};

export default InfoSection;
