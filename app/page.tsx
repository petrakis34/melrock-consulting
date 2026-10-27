import Image from "next/image";

const email = "np@melrock-consulting.com";

const practice = [
  {
    number: "01",
    title: "Advisory",
    body: "IT consulting for companies across Europe. We help you bring an idea to life with current technology, chosen for the way your business actually works.",
  },
  {
    number: "02",
    title: "Digital products",
    body: "When the brief needs a product people can use, we design and build it, and stay with the work until it holds up outside the workshop.",
  },
  {
    number: "03",
    title: "Partnerships",
    body: "Some engagements are ours alone. Others call for a specialist firm beside us. We bring those partners in when they are the right instrument for the job.",
  },
] as const;

const work = [
  {
    kicker: "Built",
    title: "The Greek Wedding Show",
    body: "We created the booking site for The Greek Wedding Show, the open-air wedding performance in Santorini. Guests choose a date, reserve their seats, and complete the evening online.",
    href: "https://www.thegreekweddingshow.com/",
    label: "thegreekweddingshow.com",
    image: "/work-greek-wedding-show.jpg",
    imageAlt: "The Greek Wedding Show booking site",
    width: 1440,
    height: 946,
  },
  {
    kicker: "Partner",
    title: "Moddule",
    body: "Moddule is the intelligence layer for global supply chains: it unifies operational data, scores predictions, and orchestrates action across the systems a company already runs. Melrock is a partner.",
    href: "https://moddule.com",
    label: "moddule.com",
    image: "/work-moddule.png",
    imageAlt: "Moddule supply chain platform",
    width: 1440,
    height: 891,
  },
] as const;

const nav = [
  { href: "#practice", label: "Practice" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Home() {
  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-stone focus:px-3 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-20 border-b border-line/15 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-3">
            <Image
              src="/mark.png"
              alt=""
              width={36}
              height={35}
              className="h-9 w-auto"
              priority
            />
            <span className="hidden text-[13px] tracking-[0.22em] text-foreground sm:inline">
              MELROCK
            </span>
          </a>
          <nav aria-label="Primary" className="hidden items-center gap-8 sm:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[12px] tracking-[0.18em] text-muted uppercase transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={`mailto:${email}`}
            className="shrink-0 text-[11px] tracking-[0.14em] text-stone uppercase sm:text-[12px] sm:tracking-[0.16em]"
          >
            Book a meeting
          </a>
        </div>
        <nav
          aria-label="Sections"
          className="mx-auto flex max-w-6xl justify-between gap-4 border-t border-line/10 px-5 py-2.5 sm:hidden"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] tracking-[0.18em] text-muted uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="content">
        <section id="top" className="scroll-mt-24 px-5 pt-36 pb-24 sm:px-8 sm:pt-40 sm:pb-32">
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)] lg:gap-20">
            <div>
              <p className="text-[11px] tracking-[0.16em] text-stone uppercase sm:text-[12px] sm:tracking-[0.28em]">
                Innovative IT solutions
              </p>
              <h1 className="mt-6 max-w-xl font-serif text-[2.15rem] leading-[0.95] font-normal text-balance sm:text-6xl lg:text-7xl">
                Transforming your business with{" "}
                <em className="text-stone">cutting-edge</em> technology.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
                At Melrock Consulting, we specialize in IT consulting for
                companies across Europe. We help you bring an idea to life with
                technology tailored to the work, and we stay until the project
                is a success.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex h-12 items-center border border-stone px-6 text-[12px] tracking-[0.18em] text-foreground uppercase transition-colors hover:bg-stone hover:text-background"
                >
                  Book a meeting
                </a>
                <a
                  href="#work"
                  className="text-[12px] tracking-[0.18em] text-muted uppercase hover:text-foreground"
                >
                  Selected work
                </a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(198,181,154,0.14),transparent_68%)]"
              />
              <Image
                src="/logo.png"
                alt="Melrock Consulting"
                width={785}
                height={837}
                priority
                className="relative h-auto w-full"
                sizes="(min-width: 1024px) 420px, 80vw"
              />
            </div>
          </div>
        </section>

        <section
          id="practice"
          className="scroll-mt-24 border-t border-line/15 px-5 py-24 sm:px-8 sm:py-32"
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
              <div>
                <p className="text-[12px] tracking-[0.28em] text-stone uppercase">
                  Practice
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                  Consulting, shaped to the brief.
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
                  Based in Nicosia, we work with companies across Europe. The
                  technology changes with the problem. The standard of care
                  does not.
                </p>
              </div>
              <ol className="divide-y divide-line/15 border-y border-line/15">
                {practice.map((item) => (
                  <li key={item.number} className="grid gap-3 py-8 sm:grid-cols-[4rem_1fr] sm:gap-8">
                    <span className="font-serif text-xl text-stone">{item.number}</span>
                    <div>
                      <h3 className="font-serif text-2xl">{item.title}</h3>
                      <p className="mt-3 max-w-lg text-base leading-relaxed text-muted">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section
          id="work"
          className="scroll-mt-24 border-t border-line/15 px-5 py-24 sm:px-8 sm:py-32"
        >
          <div className="mx-auto max-w-6xl">
            <p className="text-[12px] tracking-[0.28em] text-stone uppercase">
              Selected work
            </p>
            <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">
              A site we built, and a firm we partner with.
            </h2>
            <div className="mt-14 grid gap-px bg-line/15 sm:grid-cols-2">
              {work.map((item) => (
                <article key={item.title} className="bg-background px-0 py-10 sm:px-10 sm:py-12 sm:first:pl-0 sm:last:pr-0">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={item.width}
                    height={item.height}
                    className="mb-8 aspect-[16/10] w-full border border-line/15 object-cover object-top"
                    sizes="(min-width: 640px) 560px, 100vw"
                  />
                  <p className="text-[12px] tracking-[0.22em] text-stone uppercase">
                    {item.kicker}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl sm:text-4xl">{item.title}</h3>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
                    {item.body}
                  </p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex text-[13px] tracking-[0.08em] text-foreground underline decoration-line/30 underline-offset-4 hover:decoration-stone"
                  >
                    {item.label}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-24 border-t border-line/15 px-5 py-24 sm:px-8 sm:py-32"
        >
          <div className="mx-auto max-w-6xl">
            <p className="text-[12px] tracking-[0.28em] text-stone uppercase">
              Contact
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Book a meeting.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
              Email us during the working week. We are glad to hear from you
              in business hours.
            </p>
            <a
              href={`mailto:${email}`}
              className="mt-10 inline-block font-serif text-3xl break-all text-foreground underline decoration-line/30 underline-offset-8 hover:decoration-stone sm:text-5xl"
            >
              {email}
            </a>
            <dl className="mt-16 grid gap-10 border-t border-line/15 pt-10 sm:grid-cols-2">
              <div>
                <dt className="text-[12px] tracking-[0.22em] text-stone uppercase">
                  Hours
                </dt>
                <dd className="mt-3 text-lg">Weekdays, 09:00 – 17:00</dd>
              </div>
              <div>
                <dt className="text-[12px] tracking-[0.22em] text-stone uppercase">
                  Studio
                </dt>
                <dd className="mt-3 text-lg leading-relaxed">
                  Stasandrou 7
                  <br />
                  1060 Nicosia, Cyprus
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="border-t border-line/15 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>NP Melrock IT Consulting Ltd</p>
          <p>Nicosia · Europe</p>
        </div>
      </footer>
    </>
  );
}
