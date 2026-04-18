import Mark from "@/components/Mark";
import Reveal from "@/components/Reveal";

const mandates = [
  {
    num: "Mandate 01",
    title: (
      <>
        COO, <em>on call.</em>
      </>
    ),
    desc: "Interim or fractional leadership — transformation, growth, or turnaround. Sat inside the business until the work moves.",
    tag: "Interim · Fractional",
  },
  {
    num: "Mandate 02",
    title: (
      <>
        High-stakes <em>advisory.</em>
      </>
    ),
    desc: "Strategic clarity with execution involvement. Not advisory from a distance — judgment carried into the room.",
    tag: "Board · CEO",
  },
  {
    num: "Mandate 03",
    title: (
      <>
        Transformation &amp; <em>AI</em> programmes.
      </>
    ),
    desc: "Business-driven programmes with measurable operational outcomes. AI absorbed into operating reality, not layered on top.",
    tag: "Programme lead",
  },
  {
    num: "Mandate 04",
    title: (
      <>
        Go-to-market &amp; <em>growth</em> execution.
      </>
    ),
    desc: "Commercial structuring and activation — channels, partners, new markets. Built to convert across Europe and Asia.",
    tag: "Commercial",
  },
  {
    num: "Mandate 05",
    title: (
      <>
        Operational review &amp; <em>efficiency.</em>
      </>
    ),
    desc: "Diagnostic, cost-structure review, efficiency initiatives. Short or extended mandates — outcomes documented in P&L.",
    tag: "Diagnostic",
  },
  {
    num: "Mandate 06",
    title: (
      <>
        Transaction <em>preparation.</em>
      </>
    ),
    desc: "Fundraise, exit, or repositioning. Operational credibility and investor narrative, built on evidence — not on PowerPoint.",
    tag: "Fundraise · Exit",
  },
];

const snapshots = [
  {
    yr: "01 — COO, on call",
    title: (
      <>
        COO, <em>automation</em> &amp; smart building group
      </>
    ),
    body: "Stepped into a company in operational difficulty. Led a full reset — rebuilt delivery, restructured the team, restored execution standards, and repositioned the business for growth.",
    geo: "France · Caribbean · Switzerland",
    outTitle: "Scaled beyond €10M revenue",
    outSub: "Built and led 50+ team with full P&L ownership",
  },
  {
    yr: "02 — High-stakes advisory",
    title: (
      <>
        Executive environment, <em>Fortune 500</em> industrial group
      </>
    ),
    body: "Designed and operated digital environments for top leadership — including CEO and Executive Committee — across a decentralised, multi-country organisation.",
    geo: "Global",
    outTitle: "Supported top 200 executives across 20+ countries",
    outSub: "Delivered in high-stakes, zero-failure environments",
  },
  {
    yr: "03 — Transformation & AI",
    title: (
      <>
        Regional <em>transformation</em>, services business
      </>
    ),
    body: "Led transformation across APAC & Middle East — spanning operations, supply chain, customer experience, and commercial execution.",
    geo: "€500M business scope",
    outTitle: "15% YoY growth delivered",
    outSub: "Full programme across four functions",
  },
  {
    yr: "04 — Go-to-market & growth",
    title: (
      <>
        Global <em>channel</em> &amp; IoT go-to-market
      </>
    ),
    body: "Built and scaled partner ecosystems and connected offers across multiple regions. Aligned marketing, product, and field execution to drive commercial growth.",
    geo: "40+ countries",
    outTitle: "Tripled business results",
    outSub: "Channel programme deployed globally",
  },
  {
    yr: "05 — Operational review",
    title: (
      <>
        Enterprise <em>operations</em> optimisation, IT services
      </>
    ),
    body: "Led performance optimisation of collaboration services across large-scale environments. Simplified workflows, improved user adoption, and aligned systems with operational needs.",
    geo: "Greater China",
    outTitle: "10,000+ users supported",
    outSub: "Efficiency gains through workflow & tool optimisation",
  },
  {
    yr: "06 — Transaction preparation",
    title: (
      <>
        Operational <em>repositioning</em>, ahead of exit
      </>
    ),
    body: "Rebuilt operational credibility, stabilised performance, and structured the business to support a stronger exit narrative.",
    geo: "Europe · Asia",
    outTitle: "Profitability restored",
    outSub: "Business repositioned for exit",
  },
];

const steps = [
  {
    n: "01",
    label: "First call",
    title: "Situation read.",
    body: "A thirty-minute conversation. Direct, confidential, with Julien personally. No deck is prepared; a read of the situation is.",
    dur: "30 min",
  },
  {
    n: "02",
    label: "Framing",
    title: "Mandate written.",
    body: "One-page mandate — scope, cadence, outcomes, duration. Short enough to agree on in a single meeting; sharp enough to be useful.",
    dur: "~1 week",
  },
  {
    n: "03",
    label: "Embedded",
    title: "Personally engaged.",
    body: "Embedded in the operating cadence. Carrying the work — not supervising it. Reporting on operating reality, weekly.",
    dur: "3 – 12 months",
  },
  {
    n: "04",
    label: "Handover",
    title: "Situation moved.",
    body: "Capability transferred to a permanent operator or back to the founders. Clean exit — Altiva is designed to leave.",
    dur: "Clean exit",
  },
];

const tickerItems = [
  "Fractional COO",
  "Transformation programmes",
  "Post-acquisition execution",
  "Cross-border expansion",
  "AI, absorbed into operating reality",
  "Go-to-market activation",
  "Fundraise & exit preparation",
  "Hong Kong · Europe · Asia-Pacific",
];

export default function Home() {
  return (
    <>
      <Reveal />

      {/* =================== TOP BAR =================== */}
      <header className="topbar">
        <div className="wrap topbar-inner">
          <a href="#top" className="brand" aria-label="Altiva — home">
            <Mark variant="black" />
          </a>
          <nav className="nav" aria-label="Primary">
            <a href="#practice">Practice</a>
            <a href="#work">Work</a>
            <a href="#founder">Founder</a>
            <a href="#process">Process</a>
            <a href="#contact" className="cta">
              Start a conversation →
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* =================== HERO =================== */}
        <section className="hero" id="top">
          <div className="wrap">
            <div className="hero-grid">
              <div>
                <h1 className="display reveal">
                  Operator. <em>Not</em>
                  <br />
                  consultant.
                </h1>
              </div>

              <aside className="hero-meta reveal" aria-label="At a glance">
                <dl>
                  <div>
                    <dt>Engaged when</dt>
                    <dd>
                      execution <span>is the bottleneck</span>
                    </dd>
                  </div>
                  <div>
                    <dt>Experience</dt>
                    <dd>
                      15<span>years senior operating</span>
                    </dd>
                  </div>
                  <div>
                    <dt>Deep expertise in</dt>
                    <dd
                      style={{
                        fontSize: "clamp(18px, 1.9vw, 22px)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      Asian Pacific
                      <br />
                      &amp; European markets
                    </dd>
                  </div>
                </dl>
              </aside>
            </div>

            <div
              style={{
                marginTop: "clamp(40px, 6vw, 80px)",
                display: "grid",
                gridTemplateColumns: "1.1fr 1fr",
                gap: "clamp(32px, 6vw, 96px)",
                alignItems: "end",
              }}
              className="hero-lower"
            >
              <p className="hero-sub reveal">
                Altiva is engaged when the strategy is sound and the growth is
                there, but the organisation is not moving.{" "}
                <b>
                  One senior operator, inside the business, until the situation
                  has shifted.
                </b>{" "}
                No juniors, no slide theatre, no distance.
              </p>

              <div
                className="hero-actions reveal"
                style={{ justifyContent: "flex-end" }}
              >
                <a className="btn primary" href="#contact">
                  Start a conversation <span className="arr">→</span>
                </a>
                <a className="btn ghost" href="#work">
                  See the work <span className="arr">→</span>
                </a>
              </div>
            </div>

            <div className="ticker" aria-hidden="true">
              <div className="ticker-track">
                {[...tickerItems, ...tickerItems].map((item, i) => (
                  <span key={`item-${i}`} className="contents">
                    <span>{item}</span>
                    <span className="dot">✦</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =================== PRACTICE =================== */}
        <section id="practice">
          <div className="wrap">
            <div className="section-mark reveal">
              <span className="num">§ I.</span>
              <span>Practice</span>
              <span className="line"></span>
              <span>Six mandates</span>
            </div>
            <h2 className="h reveal">
              The work, <em>plainly</em> stated.
            </h2>

            <div className="practice-intro">
              <p className="lede reveal">
                The call usually comes when a transformation programme is not
                landing, a COO seat is empty, a post-acquisition plan needs
                structuring, or a cross-border expansion is hitting operational
                limits — typically when internal teams are capable but
                stretched, misaligned, or lacking ownership.
              </p>
              <div className="callout reveal">
                <h4>The difference</h4>
                <p>
                  Altiva is not a consulting firm and not a freelancer network.
                  It is one senior operator, engaged personally, carrying real
                  P&amp;L experience into rooms that need it. Results are
                  delivered on operating reality — commercial impact,
                  organisational capability, transaction readiness — not on
                  deliverables.
                </p>
              </div>
            </div>

            <div className="mandates reveal" role="list">
              {mandates.map((m) => (
                <article className="mandate" role="listitem" key={m.num}>
                  <div className="m-head">
                    <span className="m-num">{m.num}</span>
                    <span className="m-arr">↗</span>
                  </div>
                  <h3 className="m-title">{m.title}</h3>
                  <p className="m-desc">{m.desc}</p>
                  <span className="m-tag">{m.tag}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =================== WORK =================== */}
        <section id="work">
          <div className="wrap">
            <div className="section-mark reveal">
              <span className="num">§ II.</span>
              <span>Selected engagements</span>
              <span className="line"></span>
              <span>Anonymised</span>
            </div>
            <h2 className="h reveal">
              Situations, <em>moved.</em>
            </h2>
            <p
              className="lede reveal"
              style={{ marginBottom: "clamp(40px, 6vw, 72px)" }}
            >
              Six mandates, selected. Real operator seats, real P&amp;L, real
              outcomes — across six geographies and three continents.
            </p>

            <div className="snap-list reveal">
              {snapshots.map((s) => (
                <article className="snap" key={s.outTitle}>
                  <div className="snap-yr">{s.yr}</div>
                  <div>
                    <h3 className="snap-t">{s.title}</h3>
                    <p className="snap-body">{s.body}</p>
                  </div>
                  <div className="snap-yr">{s.geo}</div>
                  <div className="snap-out">
                    <b>{s.outTitle}</b>
                    {s.outSub}
                  </div>
                  <div className="snap-arr">↗</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =================== FOUNDER =================== */}
        <section id="founder">
          <div className="wrap">
            <div className="section-mark reveal">
              <span className="num">§ III.</span>
              <span>The founder</span>
              <span className="line"></span>
              <span>One operator</span>
            </div>
            <h2 className="h reveal">
              Julien <em>Levet.</em>
            </h2>

            <div className="founder">
              <figure
                className="portrait reveal"
                aria-label="Portrait of Julien Levet"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="photo"
                  src="/julien-levet.jpg"
                  alt="Julien Levet — Founder & Principal, Altiva"
                />
                <span className="tick">J.L. · 2026</span>
                <figcaption className="label">
                  <b>Julien Levet</b>
                  Founder &amp; Principal · Altiva Limited
                </figcaption>
              </figure>

              <div className="bio-doc reveal">
                <p>
                  Senior operator with <b>fifteen-plus years</b> of
                  international experience across Europe and Asia — bridging
                  strategy and execution in demanding environments.
                </p>
                <p>
                  Former <b>Schneider Electric</b> — senior roles across
                  digital transformation, services, and global go-to-market
                  across forty-plus countries in complex, high-performance
                  environments.
                </p>
                <p>
                  Most recently <b>COO of OÏKO</b> — led full operational
                  turnaround, shareholder exit repositioning, and growth
                  initiatives across multi-country environments. Twelve years
                  embedded in Asia (China, Singapore, Hong Kong, Indonesia).
                </p>
              </div>
            </div>

            <div className="founder-epilogue reveal">
              <blockquote className="pull">
                “Altiva is not a traditional consulting firm. I act as a
                hands-on operator, engaged to move situations forward — when
                internal execution is not enough.”
              </blockquote>

              <div className="founder-footline">
                <div className="signoff">
                  <span className="sig">Julien Levet</span>
                  <span>Founder &amp; Principal · Altiva Limited · Hong Kong</span>
                </div>
                <p className="lived-in">
                  Has lived and worked in France, the United States, China,
                  Singapore, Hong Kong and Indonesia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =================== PROCESS =================== */}
        <section id="process">
          <div className="wrap">
            <div className="section-mark reveal">
              <span className="num">§ IV.</span>
              <span>How a mandate runs</span>
              <span className="line"></span>
              <span>From first call to handover</span>
            </div>
            <h2 className="h reveal">
              Engaged <em>personally.</em>
              <br />
              Handed over cleanly.
            </h2>

            <div className="process reveal">
              {steps.map((s) => (
                <div className="step" key={s.n}>
                  <div className="n">
                    <span className="box">{s.n}</span>
                    <span>{s.label}</span>
                  </div>
                  <h5>{s.title}</h5>
                  <p>{s.body}</p>
                  <div className="dur">{s.dur}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================== CONTACT =================== */}
        <section id="contact" className="contact">
          <div className="wrap">
            <div className="accent-rule reveal" aria-hidden="true"></div>
            <div
              className="section-mark reveal"
              style={{ color: "color-mix(in oklab, var(--bone) 60%, var(--ink))" }}
            >
              <span className="num" style={{ color: "var(--accent)" }}>
                § V.
              </span>
              <span>Contact</span>
              <span
                className="line"
                style={{
                  background:
                    "color-mix(in oklab, var(--bone) 22%, transparent)",
                }}
              ></span>
              <span>Replies within two working days</span>
            </div>
            <h2 className="h reveal">
              When the situation <em>needs to move.</em>
            </h2>

            <div className="contact-grid">
              <div>
                <p className="contact-lede reveal">
                  A short note is enough. No questionnaire, no intake form, no
                  BDR. Julien reads and replies personally — usually the same
                  day, always within two working days.
                </p>
                <div className="contact-actions reveal">
                  <a className="btn light" href="mailto:contact@altiva.hk">
                    Write directly <span className="arr">→</span>
                  </a>
                  <a
                    className="btn outline-light"
                    href="https://calendly.com/altiva"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book 30 minutes <span className="arr">→</span>
                  </a>
                </div>
              </div>

              <div className="contact-card reveal">
                <h5>Registered office</h5>
                <address>
                  Altiva Limited
                  <br />
                  2/F West Wing, 822 Lai Chi Kok Road
                  <br />
                  Cheung Sha Wan, Hong Kong
                </address>
                <div className="row">
                  <span>Direct</span>
                  <b>contact@altiva.hk</b>
                </div>
                <div className="row">
                  <span>LinkedIn</span>
                  <b>/company/altivaltd</b>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =================== FOOTER =================== */}
      <footer className="site">
        <div className="wrap foot">
          <div>
            <div className="foot-brand">
              <Mark variant="bone" className="h-14 w-auto block" />
            </div>
            <div
              className="foot-meta"
              style={{ marginTop: 8, maxWidth: "42ch" }}
            >
              International advisory platform. Hong Kong · Registered 2025.
              <br />
              No analytics. No tracking.
            </div>
          </div>
          <div className="foot-meta" style={{ textAlign: "right" }}>
            <div style={{ marginBottom: 8 }}>
              <a href="mailto:contact@altiva.hk">Email</a> &nbsp;·&nbsp;
              <a
                href="https://www.linkedin.com/company/altivaltd"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            © {new Date().getFullYear()} Altiva Limited · All rights reserved
          </div>
        </div>
      </footer>
    </>
  );
}
