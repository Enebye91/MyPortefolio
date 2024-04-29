import OverskriftThree from "../Components/OverskriftThree";
import rightarrow from "../src/images/rightarrow.png";

export default function Kontact() {
  return (
    <section>
      <article>
        <div>
          <OverskriftThree overskriftThree="Let's work together" />
        </div>
        <div>
          <img src={rightarrow} alt="arrow" id="arrow-image" />
        </div>
      </article>
      <aside>
        <div>
            <p>Contact</p>
            <p>+45 20617459</p>
            <p>michellevel91@gmail.com</p>
        </div>
        <div>
            <p>Site map</p>
            <p>About</p>
            <p>Portfolio</p>
        </div>
        <div></div>
      </aside>
    </section>
  );
}
