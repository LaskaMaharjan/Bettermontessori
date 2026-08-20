// Same idea as Features.jsx — a plain list, mapped into cards.
const reasons = [
  { number: '01', title: 'Careful & Fun', text: 'Tracking development should be joyful! Our playful design makes it fun for kids and parents alike.' },
  { number: '02', title: 'Super Easy', text: 'No complicated forms. Just tap, track, and celebrate. Takes seconds to log each moment.' },
  { number: '03', title: 'Safe & Secure', text: "Your child's data stays private and protected, always. You're in control of what's shared." },
  { number: '04', title: 'Smart Insights', text: "See patterns and trends over time. Understand your child's unique rhythm and needs." },
  { number: '05', title: 'Celebrate Growth', text: "Every milestone matters. Get reminders to celebrate your child's amazing progress." },
]

export default function WhyChoose() {
  return (
    <section className="why-choose">
      <div className="section-inner">
        <h2 className="section-title">
          Why Choose Better<span className="accent">Montessori</span>?
        </h2>

        <div className="reasons-grid">
          {reasons.map((reason) => (
            <div className="reason" key={reason.number}>
              <span className="reason-number">{reason.number}</span>
              <div>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}