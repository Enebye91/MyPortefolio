import Nav from "../Components/NavBar";
// import Navigation from "../Components/Nav";
import "../src/assets/About.css";
import OverskriftTo from "../Components/OverskriftTo";
import ExtendText from "../Components/ExtendText";


export default function About() {
  return (
    <>
      <section>
        <Nav />
        {/* <Navigation /> */}
      </section>
      <section id="om_wrapper">
        <article id="om_article">
          <div className="om_tekst_container">
            <OverskriftTo overskriftTo="Multifunctional frontendDeveloper" />
            <OverskriftTo overskriftTo="based in Denmark - a traditionally" />
            <OverskriftTo overskriftTo="edicated multimediadesigner who codes" />
            {/* <Paragraf
              paragraf="While studying multimedia design, I started to learn to code
                  and a spark of interest in the digital world was ignited. I
                  became captivated by solving challenges through coding, but
                  also the creative freedom, where I can turn ideas into
                  reality, drove me to further develop within the digital realm. "
            /> */}
          </div>
          <div className="om_btn_container">
            <ExtendText />
          </div>
        </article>
      </section>
    </>
  );
}
