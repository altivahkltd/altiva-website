import Mark from "@/components/Mark";
import Portrait from "@/components/Portrait";

const engagements = [
  {
    ref: "I.",
    tag: "Luxury automation · Europe / APAC",
    situation:
      "Privately-held luxury automation group approaching shareholder exit with operational debt accumulated over a decade of founder-led growth.",
    mandate:
      "Full operational rebuild, governance restructuring, and investor narrative preparation.",
    outcome: "14-month mandate. Transaction readiness restored. Exit process initiated.",
  },
  {
    ref: "II.",
    tag: "Industrial technology · EMEA",
    situation:
      "Services division of an industrial technology multinational underperforming across multiple EMEA countries.",
    mandate:
      "Services go-to-market redesign and P&L discipline. Multi-country execution.",
    outcome:
      "18-month programme. Services margin restored. Operating model adopted beyond EMEA.",
  },
  {
    ref: "III.",
    tag: "PE-backed platform · APAC",
    situation:
      "Post-acquisition value-creation plan stalling across three APAC entities 18 months after transaction close.",
    mandate: "Operational diagnostic, governance alignment, cost-structure review.",
    outcome:
      "Six-month diagnostic, twelve-month execution. Value-creation plan re-anchored to delivered metrics.",
  },
];

const mandates = [
  {
    title: "COO, on call",
    text: "Interim or fractional leadership — transformation, growth, or turnaround. Sat inside the business until the work moves.",
  },
  {
    title: "High-stakes advisory",
    text: "Strategic clarity with execution involvement. Not advisory from a distance.",
  },
  {
    title: "Transformation & AI programmes",
    text: "Business-driven programmes with measurable operational outcomes. AI absorbed into operating reality, not layered on top.",
  },
  {
    title: "Go-to-market & growth execution",
    text: "Commercial structuring and activation — channels, partners, new markets, across Europe and Asia.",
  },
  {
    title: "Operational review & cost efficiency",
    text: "Diagnostic, cost-structure review, efficiency initiatives. Short or extended mandates.",
  },
  {
    title: "Strategic transaction preparation",
    text: "Fundraise, exit, or repositioning. Operational credibility and investor narrative, built on evidence.",
  },
];

const notes = [
  {
    date: "2026 · 03",
    title: "Why AI programmes stall at companies that need them most",
    excerpt:
      "Most AI initiatives fail in the same place: the first handoff from vendor pitch to line operations. A short piece on what to install before the model.",
  },
  {
    date: "2026 · 02",
    title: "What PE portfolios get wrong about cross-border scale",
    excerpt:
      "Value-creation plans that look tidy in a board deck tend to unravel at the second country. The operational layer that most theses skip.",
  },
  {
    date: "2026 · 01",
    title: "The hidden cost of interim leadership",
    excerpt:
      "Interim mandates are priced on day rate. They are paid for in institutional memory. A note on how to scope for knowledge transfer from day one.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      {/* ============================================================ */}
      {/* NAV                                                           */}
      {/* ============================================================ */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-paper/80 backdrop-blur-md">
        <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 md:px-10">
          <a
            href="#top"
            className="flex items-center cursor-pointer transition-opacity hover:opacity-70"
            aria-label="Altiva — home"
          >
            <Mark className="h-14 w-auto md:h-16" />
          </a>
          <div className="hidden items-center gap-10 text-sm text-stone md:flex">
            <a href="#practice" className="cursor-pointer transition-colors hover:text-ink">
              Practice
            </a>
            <a href="#engagements" className="cursor-pointer transition-colors hover:text-ink">
              Engagements
            </a>
            <a href="#founder" className="cursor-pointer transition-colors hover:text-ink">
              Founder
            </a>
            <a href="#notes" className="cursor-pointer transition-colors hover:text-ink">
              Notes
            </a>
          </div>
          <a
            href="mailto:julien_levet@outlook.com"
            className="inline-flex cursor-pointer items-center gap-2 border-b border-ink pb-0.5 text-sm text-ink transition-opacity hover:opacity-70"
          >
            Contact
            <span aria-hidden>→</span>
          </a>
        </nav>
      </header>

      {/* ============================================================ */}
      {/* HERO                                                          */}
      {/* ============================================================ */}
      <section id="top" className="grain relative border-b border-line">
        <div className="mx-auto max-w-6xl px-6 pt-40 pb-28 md:px-10 md:pt-52 md:pb-40">
          <p className="margin-note">
            <span className="text-gold">§</span> International advisory platform
          </p>

          <h1 className="mt-10 font-display text-[clamp(3rem,8.5vw,7.5rem)] font-normal leading-[0.98] tracking-[-0.025em] text-ink">
            Operator.
            <br />
            <em className="italic text-stone">Not consultant.</em>
          </h1>

          <p className="mt-12 max-w-2xl text-xl leading-[1.5] text-ink md:text-2xl md:leading-[1.45]">
            Altiva is engaged when growth is there — but execution is not keeping up.
          </p>

          <p className="mt-6 max-w-xl text-base leading-8 text-stone md:text-lg">
            15+ years of senior operating experience across 40+ countries. Based
            in Hong Kong. Engaged when internal bandwidth is not enough and
            execution becomes the bottleneck.
          </p>

          <div className="mt-14 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:julien_levet@outlook.com"
              className="group inline-flex cursor-pointer items-center justify-center bg-ink px-8 py-4 text-sm tracking-wide text-paper transition-colors duration-300 ease-soft hover:bg-graphite"
            >
              Start a conversation
              <span
                className="ml-3 transition-transform duration-300 ease-soft group-hover:translate-x-1"
                aria-hidden
              >
                →
              </span>
            </a>
            <a
              href="/ALTIVA%20OnePager.pdf"
              className="inline-flex cursor-pointer items-center justify-center border border-ink px-8 py-4 text-sm tracking-wide text-ink transition-colors duration-300 ease-soft hover:bg-ink hover:text-paper"
              target="_blank"
              rel="noreferrer"
            >
              Download the brief (PDF)
            </a>
          </div>

          <p className="mt-16 text-xs tracking-[0.24em] uppercase text-ash">
            Hong Kong · Europe · Asia-Pacific
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PRACTICE                                                      */}
      {/* ============================================================ */}
      <section id="practice" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-40">
          <header className="grid gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-3">
              <p className="margin-note">§ I. Practice</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-display text-display-lg font-normal leading-[1.05] text-ink">
                The work, plainly stated.
              </h2>
            </div>
          </header>

          <div className="mt-16 grid gap-16 md:mt-24 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-3">
              <p className="margin-note">When the call comes</p>
            </div>
            <div className="md:col-span-9 max-w-3xl space-y-6 text-lg leading-9 text-ink md:text-xl md:leading-[1.55]">
              <p>
                The call usually comes when a transformation programme is not
                landing, a COO seat is empty, a post-acquisition plan needs
                structuring, or a cross-border expansion is hitting operational
                limits.
              </p>
              <p className="text-stone">
                Typically when internal teams are capable — but stretched,
                misaligned, or lacking ownership. Altiva clarifies, structures,
                drives, and leads. Personally. Until the situation has moved.
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-10 md:mt-28 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="margin-note">Mandates</p>
            </div>
            <ul className="md:col-span-9 divide-y divide-line border-t border-line">
              {mandates.map((m) => (
                <li key={m.title} className="group">
                  <div className="grid grid-cols-1 gap-3 py-10 md:grid-cols-[1fr_1.3fr] md:gap-16 md:py-12">
                    <h3 className="font-display text-2xl leading-tight text-ink md:text-3xl">
                      {m.title}
                    </h3>
                    <p className="text-base leading-8 text-stone md:text-lg">
                      {m.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Quiet prose — former "Why Altiva" --------------------------------- */}
          <div className="mt-24 grid gap-10 md:mt-32 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="margin-note">On the difference</p>
            </div>
            <div className="md:col-span-9 max-w-3xl space-y-6 text-lg leading-9 text-ink md:text-xl md:leading-[1.55]">
              <p>
                Altiva is not a consulting firm and not a freelancer network.
                It is one senior operator, engaged personally, carrying real
                P&amp;L experience into rooms that need it.
              </p>
              <p className="text-stone">
                No junior layers. No slide theatre. Results are delivered on
                operating reality — commercial impact, organisational capability,
                transaction readiness — not on deliverables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SELECTED ENGAGEMENTS                                          */}
      {/* ============================================================ */}
      <section id="engagements" className="border-b border-line bg-shade/40">
        <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-40">
          <header className="grid gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-3">
              <p className="margin-note">§ II. Engagements · anonymized</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-display text-display-lg font-normal leading-[1.05] text-ink">
                Representative mandates.
              </h2>
              <p className="mt-8 max-w-xl text-base leading-8 text-stone md:text-lg">
                Client names and specifics withheld. Three recent engagements,
                written as the memo that would have opened them.
              </p>
            </div>
          </header>

          <ol className="mt-20 space-y-0 border-t border-line md:mt-24">
            {engagements.map((e) => (
              <li key={e.ref} className="border-b border-line">
                <article className="grid gap-10 py-12 md:grid-cols-12 md:gap-10 md:py-16">
                  <div className="md:col-span-3">
                    <p className="font-display text-3xl text-ink md:text-4xl">{e.ref}</p>
                    <p className="margin-note mt-4">{e.tag}</p>
                  </div>
                  <dl className="md:col-span-9 grid gap-8 md:grid-cols-3 md:gap-10">
                    <div>
                      <dt className="margin-note">Situation</dt>
                      <dd className="mt-3 text-base leading-7 text-ink md:text-[0.95rem] md:leading-7">
                        {e.situation}
                      </dd>
                    </div>
                    <div>
                      <dt className="margin-note">Mandate</dt>
                      <dd className="mt-3 text-base leading-7 text-ink md:text-[0.95rem] md:leading-7">
                        {e.mandate}
                      </dd>
                    </div>
                    <div>
                      <dt className="margin-note">Outcome</dt>
                      <dd className="mt-3 text-base leading-7 text-ink md:text-[0.95rem] md:leading-7">
                        {e.outcome}
                      </dd>
                    </div>
                  </dl>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FOUNDER                                                       */}
      {/* ============================================================ */}
      <section id="founder" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-40">
          <header className="grid gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-3">
              <p className="margin-note">§ III. The founder</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-display text-display-lg font-normal leading-[1.05] text-ink">
                Julien Levet.
              </h2>
              <p className="mt-8 max-w-xl text-base leading-8 text-stone md:text-lg">
                The work is done by one operator. One mandate at a time. No
                handoffs.
              </p>
            </div>
          </header>

          <div className="mt-20 grid gap-12 md:mt-24 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <div className="overflow-hidden border border-line">
                <Portrait
                  src="/julien-levet.jpg"
                  alt="Julien Levet — Founder & Principal, Altiva"
                  fallbackInitials="JL"
                  className="aspect-[4/5]"
                />
              </div>

              <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 text-sm">
                <div>
                  <dt className="margin-note">Years international</dt>
                  <dd className="mt-3 font-display text-3xl text-ink">15+</dd>
                </div>
                <div>
                  <dt className="margin-note">Countries</dt>
                  <dd className="mt-3 font-display text-3xl text-ink">40+</dd>
                </div>
                <div>
                  <dt className="margin-note">Years in Asia</dt>
                  <dd className="mt-3 font-display text-3xl text-ink">12+</dd>
                </div>
                <div>
                  <dt className="margin-note">Languages</dt>
                  <dd className="mt-3 font-display text-2xl text-ink">EN · FR</dd>
                </div>
              </dl>
            </div>

            <div className="md:col-span-8">
              <div className="space-y-6 text-lg leading-9 text-ink md:text-xl md:leading-[1.55]">
                <p>
                  Senior operator with fifteen-plus years of international
                  experience across Europe and Asia — bridging strategy and
                  execution in demanding environments.
                </p>
                <p className="text-stone">
                  Former <span className="text-ink">Schneider Electric</span> —
                  senior roles across digital transformation, services, and
                  global go-to-market, across 40+ countries in complex,
                  high-performance environments.
                </p>
                <p className="text-stone">
                  COO of <span className="text-ink">OÏKO</span> — led full
                  operational turnaround, shareholder exit repositioning, and
                  growth initiatives across multi-country environments. Twelve
                  years embedded in Asia (China, Singapore, Hong Kong, Indonesia).
                </p>
              </div>

              <figure className="mt-14 border-l border-gold pl-8">
                <blockquote className="font-display text-[clamp(1.5rem,2.6vw,2.25rem)] font-normal leading-[1.3] text-ink">
                  Altiva is not a traditional consulting firm. I act as a
                  hands-on operator, engaged to move situations forward — when
                  internal execution is not enough.
                </blockquote>
              </figure>

              <div className="mt-16 border-t border-line pt-10">
                <p className="font-display text-4xl italic tracking-[-0.01em] text-ink md:text-5xl">
                  Julien Levet
                </p>
                <p className="margin-note mt-4">
                  Founder &amp; Principal · Altiva Limited · Hong Kong
                </p>
              </div>

              <p className="mt-10 text-sm leading-7 text-ash">
                Has lived and worked in France, the United States, China,
                Singapore, Hong Kong and Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* NOTES                                                         */}
      {/* ============================================================ */}
      <section id="notes" className="border-b border-line bg-shade/40">
        <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-40">
          <header className="grid gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-3">
              <p className="margin-note">§ IV. Notes</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-display text-display-lg font-normal leading-[1.05] text-ink">
                Field notes from the operator&apos;s seat.
              </h2>
              <p className="mt-8 max-w-xl text-base leading-8 text-stone md:text-lg">
                Occasional memos on situations we see recur. Short, blunt,
                written for operators.
              </p>
            </div>
          </header>

          <ol className="mt-20 border-t border-line md:mt-24">
            {notes.map((n) => (
              <li key={n.title} className="border-b border-line">
                <article className="grid grid-cols-1 gap-6 py-10 md:grid-cols-[1fr_2fr_auto] md:gap-12 md:py-12">
                  <p className="margin-note">{n.date}</p>
                  <div>
                    <h3 className="font-display text-xl leading-snug text-ink md:text-2xl">
                      {n.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-stone">
                      {n.excerpt}
                    </p>
                  </div>
                  <p className="margin-note md:self-center">Forthcoming</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CONTACT                                                       */}
      {/* ============================================================ */}
      <section id="contact" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-32 md:px-10 md:py-48">
          <header className="grid gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-3">
              <p className="margin-note">§ V. Contact</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-display text-[clamp(2.25rem,5vw,4.25rem)] font-normal leading-[1.05] tracking-[-0.02em] text-ink">
                When the situation needs to move.
              </h2>
              <p className="mt-8 max-w-xl text-base leading-8 text-stone md:text-lg">
                A short note is enough. I reply personally within two working
                days.
              </p>
            </div>
          </header>

          <div className="mt-20 grid gap-12 md:mt-24 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-3">
              <p className="margin-note">Direct</p>
            </div>
            <div className="md:col-span-9 space-y-10">
              <a
                href="mailto:julien_levet@outlook.com"
                className="link-accent inline-block cursor-pointer break-all font-display text-2xl tracking-tight text-ink md:text-4xl"
              >
                julien_levet@outlook.com
              </a>
              <div>
                <a
                  href="https://calendly.com/julien-levet"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer text-base text-ink underline decoration-line decoration-1 underline-offset-[6px] transition hover:decoration-gold md:text-lg"
                >
                  Or book a 30-minute conversation →
                </a>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-12 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-3">
              <p className="margin-note">Registered office</p>
            </div>
            <div className="md:col-span-9">
              <p className="font-display text-lg text-ink md:text-xl">
                Altiva Limited · Hong Kong
              </p>
              <p className="mt-3 text-base leading-7 text-stone">
                2/F West Wing, 822 Lai Chi Kok Road<br />
                Cheung Sha Wan, Hong Kong
              </p>
              <p className="margin-note mt-6">
                Coverage — Europe · North America · Asia-Pacific
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FOOTER — colophon                                             */}
      {/* ============================================================ */}
      <footer className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4 flex items-start gap-4">
              <Mark className="h-10 w-auto" />
              <div>
                <p className="font-display text-base text-ink">Altiva Limited</p>
                <p className="mt-1 text-xs leading-6 text-ash">
                  International advisory platform.<br />
                  Hong Kong · Registered 2025.
                </p>
              </div>
            </div>

            <div className="md:col-span-4">
              <p className="margin-note mb-4">Colophon</p>
              <p className="text-sm leading-7 text-stone">
                This site is set in Fraunces and Inter, hand-built in Hong Kong.
                No third-party analytics. No tracking on visitors. Julien replies
                personally.
              </p>
            </div>

            <div className="md:col-span-4">
              <p className="margin-note mb-4">Direct</p>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="mailto:julien_levet@outlook.com"
                    className="cursor-pointer text-ink transition hover:text-gold"
                  >
                    julien_levet@outlook.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/altiva-limited"
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer text-ink transition hover:text-gold"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="/ALTIVA%20OnePager.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer text-ink transition hover:text-gold"
                  >
                    Capability brief (PDF)
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-xs text-ash sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Altiva Limited. All rights reserved.</p>
            <p>Hong Kong · Registered 2025</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
