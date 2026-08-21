const reviews = [
  { name: 'Sarah Mitchell', role: 'Parent, Age 3', text: "This app has been a game-changer for us! We can finally see patterns in our daughter's moods and behaviors. The teachers love it too!" },
  { name: 'Daniel Osei', role: 'Parent, Age 4', text: 'Logging nap time and meals used to slip my mind completely. Now it takes ten seconds and I actually remember what happened at school.' },
  { name: 'Priya Nair', role: 'Parent, Age 2', text: 'Potty training felt overwhelming until we started tracking it here. Seeing the little wins add up kept us all motivated.' },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="section-inner testimonials-inner">
        <div className="testimonials-intro">
          <h2>Hear From Our Parents And Community!</h2>
          <p>
            Welcome to our testimonials section, where you can discover the heartfelt stories
            and genuine experiences of our community.
          </p>
          <p className="italic">
            "Where real voices reflect the trust, growth, and joyful learning that define
            BetterMontessori."
          </p>
        </div>

        <div className="testimonials-list">
          {reviews.map((review) => (
            <div className="testimonial-card" key={review.name}>
              <div className="testimonial-head">
                <span className="avatar">👩</span>
                <div>
                  <p className="testimonial-name">{review.name}</p>
                  <p className="testimonial-role">{review.role}</p>
                </div>
              </div>
              <p>"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}