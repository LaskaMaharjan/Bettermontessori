// This is a plain list of the features to show. To add or remove a
// feature card, just add or remove an item from this list — the cards
// below will update automatically.
const featureList = [
  { icon: '😊', title: 'Mood Tracker', text: 'Track happy, energetic, neutral, sad, and angry moods with fun emojis. See patterns over time!' },
  { icon: '🍽️', title: 'Meal Time', text: 'Log meal times and what was eaten. Monitor nutrition and eating patterns of your child.' },
  { icon: '🏫', title: 'Attendance', text: 'Mark present or absent. Keep track of school days and special occasions of your child.' },
  { icon: '🏆', title: 'Behaviour', text: 'Log behaviors like smiling, focused, curious, and more. Celebrate the good moments!' },
  { icon: '🧻', title: 'Potty Training', text: 'Track potty training progress. Celebrate milestones and build confidence!' },
  { icon: '🌙', title: 'Nap Time', text: "Track total nap time and sleep patterns. Understand your child's rest needs." },
]

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="section-inner">
        <h2 className="section-title">Everything You Need To Track!</h2>
        <p className="section-subtitle">Keep track of what your child is doing.</p>

        <div className="features-grid">
          {featureList.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}