/**
 * Frise d'étapes numérotées (processus de reprise, déroulement d'intervention...).
 */
export default function StepsSection({ eyebrow, title, items = [], tone = "light" }) {
  if (!items.length) return null;

  return (
    <section className={`steps-section steps-${tone}`}>
      <div className="container">
        <div className="section-header-centered">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="heading-lg">{title}</h2>
        </div>

        <ol className="steps-grid">
          {items.map((step, idx) => (
            <li key={step.title} className="step-card">
              <span className="step-number" aria-hidden="true">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
