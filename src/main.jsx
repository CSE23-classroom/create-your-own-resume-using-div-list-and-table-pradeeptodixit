import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const services = [
  "HVAC",
  "Plumbing",
  "Electrical",
  "Cleaning",
  "Appliance repair",
  "Landscaping",
];

const workflow = [
  {
    title: "Book",
    copy: "Capture service requests, site notes, urgency, and customer preferences in a guided intake flow.",
  },
  {
    title: "Dispatch",
    copy: "Match each job with the right team, route, and arrival window without spreadsheet gymnastics.",
  },
  {
    title: "Complete",
    copy: "Send updates, collect proof of work, close invoices, and keep every detail attached to the job.",
  },
];

const metrics = [
  ["31%", "fewer missed arrival windows"],
  ["4.8/5", "average customer rating"],
  ["18 hrs", "saved each week on scheduling"],
];

const features = [
  {
    icon: "M",
    title: "Mobile job cards",
    copy: "Technicians see tasks, photos, parts, checklists, and customer history from the field.",
  },
  {
    icon: "R",
    title: "Route-aware scheduling",
    copy: "Build routes around skill, location, job duration, priority, and service commitments.",
  },
  {
    icon: "Q",
    title: "Quotes and invoices",
    copy: "Turn estimates into approved jobs, then close the loop with tidy digital invoices.",
  },
  {
    icon: "A",
    title: "Admin command center",
    copy: "Track workloads, callbacks, open invoices, and team capacity from one operational view.",
  },
];

function App() {
  return (
    <main>
      <header className="site-header" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="ServiceGo Works home">
          <span className="brand-mark">SG</span>
          <span>servicego.works</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          <a href="#platform">Platform</a>
          <a href="#workflow">Workflow</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <a className="nav-action" href="#demo">Book demo</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Field service software for fast-moving teams</p>
          <h1>Run every service job from request to invoice.</h1>
          <p className="hero-text">
            ServiceGo Works gives home and field-service companies one calm place
            to quote work, schedule crews, dispatch routes, update customers, and
            collect payment.
          </p>

          <div className="hero-actions">
            <a className="button primary" href="#demo">
              Start a free workflow audit
            </a>
            <a className="button secondary" href="#platform">
              See the platform
            </a>
          </div>

          <div className="service-strip" aria-label="Supported service categories">
            {services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="Service dispatch dashboard preview">
          <img src="/servicego-operations.svg" alt="" />
        </div>
      </section>

      <section className="metrics" aria-label="ServiceGo Works impact metrics">
        {metrics.map(([value, label]) => (
          <article key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>

      <section className="platform" id="platform">
        <div className="section-heading">
          <p className="eyebrow">Platform</p>
          <h2>Everything your coordinators and technicians need, without clutter.</h2>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <span className="feature-icon" aria-hidden="true">
                {feature.icon}
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow" id="workflow">
        <div className="section-heading compact">
          <p className="eyebrow">Workflow</p>
          <h2>A clean operating rhythm for every job.</h2>
        </div>

        <div className="workflow-steps">
          {workflow.map((step, index) => (
            <article key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pricing" id="pricing">
        <div>
          <p className="eyebrow">Launch offer</p>
          <h2>Start with the workflows your team already uses.</h2>
          <p>
            We map your intake, dispatch, and follow-up process before rollout,
            then configure ServiceGo Works around the jobs you actually run.
          </p>
        </div>

        <aside className="price-panel">
          <span>From</span>
          <strong>$49</strong>
          <p>per dispatcher per month</p>
          <a
            className="button primary"
            href="mailto:hello@servicego.works?subject=ServiceGo%20Works%20demo"
            id="demo"
          >
            Request demo
          </a>
        </aside>
      </section>

      <footer>
        <span>servicego.works</span>
        <span>Built for teams that keep the day moving.</span>
      </footer>
    </main>
  );
}

export default App;

createRoot(document.getElementById("root")).render(<App />);