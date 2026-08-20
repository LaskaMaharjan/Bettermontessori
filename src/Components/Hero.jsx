// The hero is the big introduction section at the top of the page.
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-title-row">
          <h1>
            Watch Your Little One
            <br />
            <span className="hero-highlight">
              <span className="hero-badge">Curiosity meets fun</span>
              Grow &amp; Shine!
            </span>
          </h1>
        </div>

        <p className="hero-subtext">
          Track moods, behaviors, meals, naps, and potty training all in one fun app.
          See your child's amazing journey unfold!
        </p>

        <a href="#features" className="btn btn-primary btn-large">
          Get started →
        </a>
      </div>
    </section>
  )
}
