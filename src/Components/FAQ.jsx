import { useState } from 'react'

const faqs = [
  { q: 'Is BetterMontessori free?', a: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required. After that, we have affordable plans starting at just $9.99/month.' },
  { q: 'Can I track more than one child?', a: 'Absolutely. You can add as many children as you like to a single account and switch between their profiles in seconds.' },
  { q: 'Can teachers and caregivers use it too?', a: 'Yes, you can invite teachers and caregivers to log updates so everyone stays on the same page throughout the day.' },
  { q: "Is my child's data kept private?", a: "Your child's data is encrypted and never sold. You decide exactly who can see it, and you can export or delete it anytime." },
]

export default function FAQ() {
  // openIndex remembers which question is currently expanded.
  // Starts at 0 so the first question is open by default.
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="faq">
      <div className="section-inner faq-inner">
        <h2 className="section-title">Frequently Asked Questions!</h2>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex
            return (
              <div className={isOpen ? 'faq-item open' : 'faq-item'} key={faq.q}>
                <button
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  {faq.q}
                  <span className="faq-arrow">⌄</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="faq-cta">
          <h3>Still have questions?</h3>
          <p>Can't find the answers to the questions you're looking for?</p>
          <a href="#contact" className="btn btn-outline">Contact Us</a>
        </div>
      </div>