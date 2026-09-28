const experiences = [
  {
    company: 'LLP ABR Tech',
    dates:
      'Feb 2024 - Aug 2025 full-time, on-site · Sep 2025 - present part-time',
    location: 'Almaty, Kazakhstan · hybrid/remote',
    media: 'coming-soon',
    role: 'Senior Software Engineer / Full-Stack Developer',
    achievements: [
      'Owned frontend development across about 10 company web projects, including client-facing applications, internal products, web views, and landing pages; built with React, TypeScript, Vite, Redux, Nx, and SSR.',
      'Reviewed code, mentored developers, and contributed to technical decisions.',
      'Developed backend features in C#/.NET 9, including restaurant menu functionality, admin features, and REST APIs; worked with PostgreSQL and MongoDB.',
      'Built shared UI components and responsive interfaces from Figma using Astro, Radix UI, and Tailwind CSS.',
    ],
  },
  {
    company: 'NXT LVL PZA',
    dates: 'Jul 2022 - Feb 2023',
    location: 'London, UK · remote',
    media: 'nxt-lvl-pza',
    role: 'Mobile & Web Developer',
    achievements: [
      'Helped deliver a startup web and mobile ordering product to production within a few months, working with rapid iterations and frequent releases.',
      'Built the core mobile ordering flow with React Native, TypeScript, and Redux Toolkit, including card payments and Apple Pay; also developed the web ordering application with React/Next.js and unit tests.',
      'Implemented responsive Figma designs, analytics, performance optimizations, and production features using Gatsby, Styled Components, Firebase, and WebSockets.',
    ],
  },
  {
    company: 'LLP Bass Technology',
    dates: 'Jul 2020 - Jul 2022',
    location: 'Almaty, Kazakhstan · on-site',
    media: 'none',
    role: 'Software Developer',
    achievements: [
      'Rewrote approximately 80% of a legacy JavaScript application in React and TypeScript, modernizing the codebase and improving maintainability.',
      'Developed and supported an electronic queue monitoring system for queues, employees, and departments using React, TypeScript, and Redux Toolkit.',
      'Migrated desktop functionality to the web, adapted interfaces to client requirements, and built responsive layouts from Figma.',
    ],
  },
] as const;

const skillGroups = [
  {
    name: 'Frontend & Mobile',
    skills:
      'React, TypeScript, JavaScript (ES6+), React Native, Next.js, Vite, Webpack, Redux / Redux Toolkit, TanStack Router/Query, SSR, Nx monorepos, Astro, Gatsby',
  },
  {
    name: 'UI & Product Interfaces',
    skills:
      'Tailwind CSS, Radix UI, Material UI, Styled Components, SCSS/SASS, Bootstrap, Motion, Recharts, responsive & cross-browser design',
  },
  {
    name: 'Libraries & Integrations',
    skills:
      'React Hook Form, Zod, i18next, dnd-kit, Mobiscroll, date-fns, Axios, XLSX, Google Maps API, reCAPTCHA, Video.js',
  },
  {
    name: 'Backend & Data',
    skills: 'C#, .NET 9, REST API design & integration, PostgreSQL, MongoDB',
  },
  {
    name: 'Testing & Code Quality',
    skills:
      'Jest, React Testing Library, unit/integration testing, ESLint, Prettier, GitHub/GitLab code review',
  },
  {
    name: 'Delivery & Workflow',
    skills:
      'Git, GitHub, GitLab, GitHub Actions, CI/CD, Docker, Agile/Scrum, Kanban',
  },
] as const;

export function ProjectsRoom() {
  return (
    <section
      aria-label="Portfolio"
      className="min-h-svh px-room-inline pt-28 pb-room-block sm:pt-32"
      id="room-entrance"
    >
      <div className="mx-auto w-full max-w-6xl">
        <header className="max-w-4xl">
          <p className="text-sm font-medium tracking-wide text-accent-primary">
            Portfolio
          </p>
          <h1 className="mt-4 text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-ink-primary">
            Professional Experience
          </h1>
          <p className="mt-5 text-lg leading-8 text-ink-secondary sm:text-xl">
            5+ years building and shipping web, mobile, and full-stack products.
          </p>
        </header>

        <div className="mt-16 space-y-8 sm:mt-20">
          {experiences.map((experience) => (
            <article
              className="glass-surface overflow-hidden"
              key={experience.company}
            >
              <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-12">
                <header>
                  <p className="text-sm font-medium text-accent-primary">
                    {experience.company}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary sm:text-3xl">
                    {experience.role}
                  </h2>
                  <p className="mt-5 leading-7 text-ink-secondary">
                    {experience.dates}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-ink-muted">
                    {experience.location}
                  </p>
                </header>

                <ul
                  aria-label={`${experience.company} achievements`}
                  className="space-y-4 text-base leading-7 text-ink-secondary"
                >
                  {experience.achievements.map((achievement) => (
                    <li className="flex gap-3" key={achievement}>
                      <span
                        aria-hidden="true"
                        className="mt-[0.7rem] size-1.5 shrink-0 rounded-full bg-accent-primary"
                      />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {experience.media === 'coming-soon' ? (
                <div className="mx-5 mb-5 flex min-h-32 items-center justify-center rounded-control border border-dashed border-line-default px-6 text-center text-sm text-ink-muted sm:mx-8 sm:mb-8">
                  Project photos and video coming soon
                </div>
              ) : null}

              {experience.media === 'nxt-lvl-pza' ? (
                <div
                  aria-label="NXT LVL PZA product screenshots"
                  className="grid gap-3 px-5 pb-5 sm:px-8 sm:pb-8 lg:grid-cols-2"
                  role="group"
                >
                  <figure className="overflow-hidden rounded-panel bg-white">
                    <img
                      alt="NXT LVL PZA loyalty application screens"
                      className="h-full w-full object-contain"
                      height="848"
                      loading="lazy"
                      src="/images/portfolio/nxt-lvl-pza-loyalty.jpeg"
                      width="1920"
                    />
                  </figure>
                  <figure className="overflow-hidden rounded-panel bg-white">
                    <img
                      alt="NXT LVL PZA mobile ordering application screens"
                      className="h-full w-full object-contain"
                      height="1205"
                      loading="lazy"
                      src="/images/portfolio/nxt-lvl-pza-mobile-app.jpeg"
                      width="1920"
                    />
                  </figure>
                </div>
              ) : null}
            </article>
          ))}
        </div>

        <section aria-labelledby="technical-skills-title" className="mt-24">
          <h2
            className="text-3xl font-semibold tracking-[-0.03em] text-ink-primary sm:text-4xl"
            id="technical-skills-title"
          >
            Technical Skills
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <article className="glass-surface p-5 sm:p-6" key={group.name}>
                <h3 className="font-semibold text-accent-primary">
                  {group.name}
                </h3>
                <p className="mt-4 leading-7 text-ink-secondary">
                  {group.skills}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
