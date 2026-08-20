// The mission/about banner with the blue background.
export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-inner about-inner">
        <div className="about-text">
          <span className="pill">Caring is Always Free</span>
          <h2>
            We Help Your Children
            <br />
            <span className="sun-text">Grow with Confidence.</span>
          </h2>
          <p>
            We believe every child's growth journey is unique and special. BetterMontessori
            was created by parents and educators who wanted a simple, joyful way to track and
            celebrate every milestone. Our mission is to help parents and educators stay
            connected to children's development, making it easy to see patterns, celebrate
            progress, and support growth in a fun, colorful way.
          </p>
        </div>

        <div className="about-card-wrap">
          <div className="divider"></div>
          <figure className="about-card">
            <div className="about-card-image">✍️</div>
            <blockquote>
              "Empowering little learners to build big futures with curiosity and kindness."
            </blockquote>
          </figure>
        </div>
      </div>
    </section>
  )
}