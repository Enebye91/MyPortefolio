import "../assets/ContactSection.css";
import BigParagraf from "./BigParagraf";
import portraet from "../assets/images/portraet.jpg";

export default function ContactSection() {
  return (
    <section className="Hit_up">
      <article className="ekstra_wrapper">
        <div className="ekstra_container">
          <div className="portraet_wrap">
            <div className="portraet_contain">
              <img src={portraet} alt="My Image" id="selv" />
            </div>
            <BigParagraf bigparagraf="Let's work" />
          </div>
        </div>
      </article>
      <aside className="c_container">
        <div className="second_header">
          <BigParagraf bigparagraf="Together" />
        </div>
        <div className="c_box">
          <button className="kontact">
            <a href="mailto:michellevel91@gmail.com">michellevel91@gmail.com</a>
          </button>
          <button className="kontact">
            <a href="tel:+4520617459">+45 20 61 74 59</a>
          </button>
        </div>
      </aside>
    </section>
  );
}
