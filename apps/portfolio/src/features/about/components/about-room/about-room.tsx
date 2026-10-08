import { Link } from '@tanstack/react-router';

const education = [
  {
    alt: 'KU Leuven logo',
    image: '/images/about/ku-leuven.png',
    name: 'Master’s in International Business Engineering',
    location: 'KU Leuven, Brussels, Belgium',
    description: 'Exchange Studies | Sep 2026 - Jan 2027',
    focus: 'ICT Strategy and Architecture, Data Science for Finance',
  },
  {
    alt: 'IAE Montpellier logo',
    image: '/images/about/iae-montpellier.png',
    name: 'Master’s in International Business Engineering',
    location: 'IAE Montpellier, France',
    description: 'Sep 2025 - Aug 2027',
    courses:
      'Financial Accounting, International Finance and Exchange Markets,',
    focus: 'Information Systems',
    highlight: 'Grade 15.979/20 · Rank 4/41',
  },
  {
    alt: 'University of Central Asia logo',
    image: '/images/about/university-of-central-asia.png',
    name: 'BSc Computer Science',
    location: 'University of Central Asia, Kyrgyzstan',
    description: 'Sep 2018 - Jul 2022',
    award: 'Best Research Project Award',
    awardDescription:
      'for building a low-cost digital library for remote regions using Raspberry Pi.',
    highlight: 'Magna cum laude',
  },
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
            <h1
              className="text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-ink-primary"
              id="about-title"
            >
              Hi, I’m Valeriya.
            </h1>
            <p className="mt-5 text-lg leading-7 font-medium text-accent-primary sm:text-xl sm:leading-8">
              Senior Software Engineer | Full-Stack
            </p>
            <p className="mt-5 max-w-3xl text-base leading-7 text-ink-secondary sm:text-lg">
              Open to{' '}
              <strong className="font-semibold text-ink-primary">
                software engineering opportunities from February 2027
              </strong>{' '}
              — CDI · CDD in France, ideally remote or with limited on-site
              presence.
            </p>

            <div className="mt-8 max-w-3xl space-y-5 text-base leading-7 text-ink-secondary sm:text-lg sm:leading-8">
              <p>
                I have{' '}
                <strong className="font-semibold text-ink-primary">
                  5+ years of experience
                </strong>{' '}
                across frontend and backend development, specializing in React,
                TypeScript, and C#/.NET. I build software from the ground up,
                make technical decisions, modernize legacy applications, and
                develop backend services. I also establish shared tooling and
                automated checks to keep code quality consistent as products
                grow.
              </p>
              <p>
                Through my master’s in International Business Engineering, I’m
                expanding beyond the technical side into{' '}
                <strong className="font-semibold text-ink-primary">
                  product, business strategy, and ICT architecture
                </strong>
                .
              </p>
              <p>
                I still enjoy good code, but I’m increasingly interested in the
                decisions that happen before anyone opens the IDE.
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
                key={item.image}
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
                {'award' in item ? (
                  <p className="mt-4 leading-7 text-ink-secondary">
                    <strong className="font-semibold text-accent-primary">
                      {item.award}
                    </strong>{' '}
                    {item.awardDescription}
                  </p>
                ) : null}
                {'focus' in item ? (
                  <p className="mt-4 leading-7 text-ink-secondary">
                    {'courses' in item ? <>{item.courses} </> : null}
                    <strong className="font-semibold text-accent-primary">
                      {item.focus}
                    </strong>
                  </p>
                ) : null}
                {'highlight' in item ? (
                  <p className="mt-4 font-semibold text-accent-primary">
                    {item.highlight}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
