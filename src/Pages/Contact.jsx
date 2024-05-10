import Nav from "../Components/NavBar";
import "../assets/Contact.css";
import Overskrift from "../Components/Overskrift";
import OverskriftTo from "../Components/OverskriftTo";
import Paragraf from "../Components/Paragraf";
import Footer from "../Components/Footer";
// import Link from "react";

export default function Contact() {
  return (
    <>
      <section className="nav_wrapper">
        <Nav />
      </section>
      <section className="about_wrapper">
        <article id="about_article">
          <Overskrift overskrift="Let's work" />
          <OverskriftTo overskriftTo="Together" />
        </article>
        <div className="about_div">
          <div>
            <Paragraf paragraf="Lorem ipsum " />
            <Paragraf paragraf="Lorem ipsum" />
          </div>

          <button className="About_btn">Contact</button>
        </div>
      </section>
      <section id="Pattern_wrapper">
        <article></article>
        <aside id="grid-container">
          <div className="grid-item">
            <div className="Squre_wrapper" id="Square_one">
              <div className="square"></div>
            </div>

            <div className="circle"></div>

            <div className="circle"></div>
            <div className="Squre_wrapper" id="Squre_three_wrapper">
              <div className="square" id="Square_three"></div>
            </div>
            <div className="Circle_three_wrapper">
              <div className="circle" id="Circle_three"></div>
            </div>
          </div>
        </aside>
      </section>
      <Footer />
    </>
  );
}
