import Navigation from "../Components/Nav";
import TextAnimation from "../Components/TextAnimation";
// import Mijo from "../src/images/Mijo.png";
import CircleButton from "../Components/CircleWithSection";
import Paragraf from "../Components/Paragraf";
import "../assets/Landingpage.css";
import Overskrift from "../Components/Overskrift";

export default function LandingPage() {
  return (
    <>
      <Navigation />
      <section className="Hero">
        <article className="Hero_container">
          <div className="taleboble">
            <TextAnimation />
          </div>
          <div className="job_container">
            <Overskrift overskrift="Michelle V." />
            <p>Johansen</p>
          </div>
          <div className="student_text_wrapper">
            <Paragraf paragraf="Webdeveloper student" />
            <Paragraf paragraf="from Denmark" />
          </div>
          <div className="Hero_btn">
            <CircleButton />
          </div>
        </article>
        {/* <div>
          <img src={Mijo} alt="mockupImage" id="mijo" />
        </div> */}
      </section>
    </>
  );
}
