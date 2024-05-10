import "../assets/Hero.css";

export default function Hero() {
  return (
    <section className="Hero">
      <article className="Hero_text">
        <div>
          <h1>Tell a better</h1>
          <h2>Brand Storie</h2>
          <p>Lorem ipsum</p>
        </div>

        <div className="Hero_btn">
          <button>Explore</button>
          <button>Contact</button>
        </div>
      </article>
      <aside>
        <article>
          <p>Hello</p>
        </article>
      </aside>
    </section>
  );
}
