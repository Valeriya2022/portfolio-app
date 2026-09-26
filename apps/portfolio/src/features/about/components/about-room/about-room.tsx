import { Link } from '@tanstack/react-router';

const education = [
  {
    alt: 'KU Leuven logo',
    image: '/images/about/ku-leuven.png',
    name: 'KU Leuven',
    location: 'Brussels, Belgium',
    description:
      'Exchange semester studying enterprise architecture, ICT strategy, and finance.',
  },
  {
    alt: 'IAE Montpellier logo',
    image: '/images/about/iae-montpellier.png',
    name: 'IAE Montpellier',
    location: 'France',
    description:
      "Master's in International Business Engineering. Research focus: privacy-enhancing technologies in companies.",
    highlight: 'Ranked 4th out of 41 students.',
  },
  {
    alt: 'University of Central Asia logo',
    image: '/images/about/university-of-central-asia.png',
    name: 'University of Central Asia',
    description: 'BSc in Computer Science · Magna cum laude · Thesis prize.',
  },
] as const;

const contactLinks = [
  { href: 'mailto:your.email@example.com', label: 'Email' },
  { href: 'https://www.linkedin.com/in/your-profile', label: 'LinkedIn' },
  { href: 'https://github.com/your-username', label: 'GitHub' },
] as const;

export function AboutRoom() {
  return (
    <section
      aria-label="About Me"
      className="min-h-svh px-room-inline pt-28 pb-room-block sm:pt-32"
      data-room="About"
      id="room-entrance"
    >
      <div className="mx-auto w-full max-w-6xl space-y-24 lg:space-y-32">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(17rem,0.78fr)_minmax(0,1.35fr)] lg:gap-16">
          <figure className="mx-auto w-full max-w-md overflow-hidden rounded-panel bg-house-surface lg:max-w-none">
            <img
              alt="Valeriya Nikiforova"
              className="aspect-[4/5] h-full w-full object-cover"
              height="1646"
              src="/images/about/valeriya-nikiforova.jpg"
              width="1234"
            />
          </figure>

          <div>
            <p className="mb-4 text-sm font-medium tracking-wide text-accent-primary">
              Senior Frontend Developer · Full-Stack Experience
            </p>
            <h1
              className="text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-ink-primary"
              id="about-title"
            >
              Hi, I’m Valeriya.
            </h1>
            <p className="mt-5 text-lg font-medium text-ink-primary sm:text-xl">
              React · TypeScript · C#/.NET
            </p>

            <div className="mt-8 max-w-3xl space-y-5 text-base leading-7 text-ink-secondary sm:text-lg sm:leading-8">
              <p>
                I have{' '}
                <strong className="font-semibold text-ink-primary">
                  5+ years of experience
                </strong>{' '}
                building web and mobile products with React, TypeScript, and
                React Native, alongside substantial backend work with C#/.NET.
                I’ve worked on everything from landing pages to complex web and
                mobile applications, building products from scratch and
                improving existing systems—from designing interfaces to
                developing the backend logic behind them.
              </p>
              <p>
                I enjoy owning features from start to finish and understanding
                the business behind what I build. That’s also why I’m pursuing a
                master’s in International Business Engineering, with a
                particular interest in{' '}
                <strong className="font-semibold text-ink-primary">
                  ICT strategy and architecture
                </strong>
                .
              </p>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                className="glass-control inline-flex min-h-11 items-center px-4 text-sm font-medium"
                to="/portfolio"
              >
                Explore my experience &amp; projects →
              </Link>
              <a
                className="inline-flex min-h-11 items-center rounded-control px-4 text-sm font-medium text-ink-primary underline decoration-line-default underline-offset-4 transition-colors hover:decoration-ink-primary"
                download
                href="/documents/Valeriya_Nikiforova_CV.pdf"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        <section aria-labelledby="education-title">
          <h2
            className="text-3xl font-semibold tracking-[-0.03em] text-ink-primary sm:text-4xl"
            id="education-title"
          >
            Education
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {education.map((item) => (
              <article
                className="glass-surface flex min-h-full flex-col p-5 sm:p-6"
                key={item.name}
              >
                <div className="mb-8 flex h-24 items-center justify-center overflow-hidden rounded-control bg-white p-4">
                  <img
                    alt={item.alt}
                    className="max-h-full max-w-full object-contain"
                    src={item.image}
                  />
                </div>
                <h3 className="text-lg font-semibold text-ink-primary">
                  {item.name}
                </h3>
                {'location' in item ? (
                  <p className="mt-1 text-sm text-ink-muted">{item.location}</p>
                ) : null}
                <p className="mt-4 leading-7 text-ink-secondary">
                  {item.description}
                </p>
                {'highlight' in item ? (
                  <p className="mt-4 font-semibold text-accent-primary">
                    {item.highlight}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="connect-title"
          className="border-t border-line-subtle pt-12"
        >
          <h2
            className="text-3xl font-semibold tracking-[-0.03em] text-ink-primary sm:text-4xl"
            id="connect-title"
          >
            Let’s connect
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-ink-secondary sm:text-lg sm:leading-8">
            <p>
              Based in France, currently on exchange in Brussels. Open to{' '}
              <strong className="font-semibold text-ink-primary">
                software engineering opportunities from March 2027
              </strong>
              , preferably remote or with occasional office visits.
            </p>
            <p>
              I speak{' '}
              <strong className="font-semibold text-ink-primary">
                English, Russian, and conversational French
              </strong>
              .
            </p>
          </div>
          <nav aria-label="Contact links" className="mt-8 flex flex-wrap gap-3">
            {contactLinks.map((link) => (
              <a
                className="glass-control inline-flex min-h-11 items-center px-4 text-sm font-medium"
                href={link.href}
                key={link.label}
                rel="noreferrer"
                target={link.href.startsWith('http') ? '_blank' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <p className="mt-4 text-xs text-ink-muted">
            Contact links are placeholders until final URLs are added.
          </p>
        </section>
      </div>
    </section>
  );
}
