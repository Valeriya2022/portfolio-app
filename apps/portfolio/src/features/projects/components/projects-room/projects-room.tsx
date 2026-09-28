import { ScrollReveal } from '@learning-app/motion';

const experiences = [
  {
    achievements: [
      {
        label: 'Ownership',
        text: 'Owned frontend development across about 10 company web projects, including client-facing applications, internal products, web views, and landing pages; built with React, TypeScript, Vite, Redux, Nx, and SSR.',
      },
      {
        label: 'Leadership',
        text: 'Reviewed code, mentored developers, and contributed to technical decisions.',
      },
      {
        label: 'Backend',
        text: 'Developed backend features in C#/.NET 9, including restaurant menu functionality, admin features, and REST APIs; worked with PostgreSQL and MongoDB.',
      },
      {
        label: 'Interfaces',
        text: 'Built shared UI components and responsive interfaces from Figma using Astro, Radix UI, and Tailwind CSS.',
      },
    ],
    company: 'LLP ABR Tech',
    dates:
      'Feb 2024 - Aug 2025 full-time, on-site · Sep 2025 - present part-time',
    location: 'Almaty, Kazakhstan · hybrid/remote',
    media: 'coming-soon',
    metric: '~10',
    metricLabel: 'company web projects',
    role: 'Senior Software Engineer / Full-Stack Developer',
    technologies: [
      'React',
      'TypeScript',
      'C#/.NET 9',
      'Nx',
      'SSR',
      'PostgreSQL',
      'MongoDB',
    ],
  },
  {
    achievements: [
      {
        label: 'Delivery',
        text: 'Helped deliver a startup web and mobile ordering product to production within a few months, working with rapid iterations and frequent releases.',
      },
      {
        label: 'Ordering & payments',
        text: 'Built the core mobile ordering flow with React Native, TypeScript, and Redux Toolkit, including card payments and Apple Pay; also developed the web ordering application with React/Next.js and unit tests.',
      },
      {
        label: 'Production',
        text: 'Implemented responsive Figma designs, analytics, performance optimizations, and production features using Gatsby, Styled Components, Firebase, and WebSockets.',
      },
    ],
    company: 'NXT LVL PZA',
    dates: 'Jul 2022 - Feb 2023',
    location: 'London, UK · remote',
    media: 'nxt-lvl-pza',
    metric: 'Months',
    metricLabel: 'from startup iteration to production',
    role: 'Mobile & Web Developer',
    technologies: [
      'React Native',
      'TypeScript',
      'Next.js',
      'Redux Toolkit',
      'Apple Pay',
      'Firebase',
      'WebSockets',
    ],
  },
  {
    achievements: [
      {
        label: 'Modernization',
        text: 'Rewrote approximately 80% of a legacy JavaScript application in React and TypeScript, modernizing the codebase and improving maintainability.',
      },
      {
        label: 'Product',
        text: 'Developed and supported an electronic queue monitoring system for queues, employees, and departments using React, TypeScript, and Redux Toolkit.',
      },
      {
        label: 'Migration',
        text: 'Migrated desktop functionality to the web, adapted interfaces to client requirements, and built responsive layouts from Figma.',
      },
    ],
    company: 'LLP Bass Technology',
    dates: 'Jul 2020 - Jul 2022',
    location: 'Almaty, Kazakhstan · on-site',
    media: 'none',
    metric: '80%',
    metricLabel: 'of the legacy application rewritten',
    role: 'Software Developer',
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Figma'],
  },
] as const;

const skillGroups = [
  {
    name: 'Frontend & Mobile',
    skills: [
      'React',
      'TypeScript',
      'JavaScript (ES6+)',
      'React Native',
      'Next.js',
      'Vite',
      'Webpack',
      'Redux / Redux Toolkit',
      'TanStack Router/Query',
      'SSR',
      'Nx monorepos',
      'Astro',
      'Gatsby',
    ],
  },
  {
    name: 'UI & Product Interfaces',
    skills: [
      'Tailwind CSS',
      'Radix UI',
      'Material UI',
      'Styled Components',
      'SCSS/SASS',
      'Bootstrap',
      'Motion',
      'Recharts',
      'Responsive design',
      'Cross-browser design',
    ],
  },
  {
    name: 'Libraries & Integrations',
    skills: [
      'React Hook Form',
      'Zod',
      'i18next',
      'dnd-kit',
      'Mobiscroll',
      'date-fns',
      'Axios',
      'XLSX',
      'Google Maps API',
      'reCAPTCHA',
      'Video.js',
    ],
  },
  {
    name: 'Backend & Data',
    skills: [
      'C#',
      '.NET 9',
      'REST API design & integration',
      'PostgreSQL',
      'MongoDB',
    ],
  },
  {
    name: 'Testing & Code Quality',
    skills: [
      'Jest',
      'React Testing Library',
      'Unit/integration testing',
      'ESLint',
      'Prettier',
      'GitHub/GitLab code review',
    ],
  },
  {
    name: 'Delivery & Workflow',
    skills: [
      'Git',
      'GitHub',
      'GitLab',
      'GitHub Actions',
      'CI/CD',
      'Docker',
      'Agile/Scrum',
      'Kanban',
    ],
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
        <ScrollReveal>
          <header className="max-w-4xl">
            <p className="text-sm font-medium tracking-wide text-accent-primary">
              Portfolio
            </p>
            <h1 className="mt-4 text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-ink-primary">
              Professional Experience
            </h1>
            <p className="mt-5 text-lg leading-8 text-ink-secondary sm:text-xl">
              5+ years building and shipping web, mobile, and full-stack
              products.
            </p>
          </header>
        </ScrollReveal>

        <div className="mt-20 sm:mt-28">
          {experiences.map((experience, experienceIndex) => (
            <ScrollReveal
              className="border-t border-line-subtle py-16 first:pt-0 sm:py-24"
              key={experience.company}
            >
              <article>
                <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(16rem,0.55fr)] lg:items-start lg:gap-20">
                  <header>
                    <p className="text-sm font-medium text-accent-primary">
                      {String(experienceIndex + 1).padStart(2, '0')} ·{' '}
                      {experience.company}
                    </p>
                    <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.035em] text-ink-primary sm:text-4xl">
                      {experience.role}
                    </h2>
                    <p className="mt-6 max-w-2xl leading-7 text-ink-secondary">
                      {experience.dates}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-ink-muted">
                      {experience.location}
                    </p>
                  </header>

                  <div className="lg:text-right">
                    <p className="text-[clamp(3.75rem,8vw,7rem)] leading-none font-semibold tracking-[-0.06em] text-accent-primary">
                      {experience.metric}
                    </p>
                    <p className="mt-3 max-w-xs leading-6 text-ink-secondary lg:ml-auto">
                      {experience.metricLabel}
                    </p>
                  </div>
                </div>

                <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
                  {experience.achievements.map((achievement, index) => (
                    <ScrollReveal delay={index * 0.04} key={achievement.label}>
                      <section aria-label={achievement.label}>
                        <p className="text-xs font-semibold tracking-[0.12em] text-accent-primary uppercase">
                          {achievement.label}
                        </p>
                        <p className="mt-3 leading-7 text-ink-secondary">
                          {achievement.text}
                        </p>
                      </section>
                    </ScrollReveal>
                  ))}
                </div>

                <ul
                  aria-label={`${experience.company} technologies`}
                  className="mt-10 flex flex-wrap gap-2"
                >
                  {experience.technologies.map((technology) => (
                    <li
                      className="rounded-control border border-line-subtle px-3 py-1.5 text-xs text-ink-muted"
                      key={technology}
                    >
                      {technology}
                    </li>
                  ))}
                </ul>

                {experience.media === 'coming-soon' ? (
                  <div className="mt-12 flex min-h-36 items-center justify-center rounded-panel border border-dashed border-line-default px-6 text-center text-sm text-ink-muted">
                    Project photos and video coming soon
                  </div>
                ) : null}

                {experience.media === 'nxt-lvl-pza' ? (
                  <div
                    aria-label="NXT LVL PZA product screenshots"
                    className="mt-12 space-y-4"
                    role="group"
                  >
                    <ScrollReveal>
                      <figure className="overflow-hidden rounded-panel bg-white shadow-[var(--shadow-panel)]">
                        <img
                          alt="NXT LVL PZA mobile ordering application screens"
                          className="h-auto w-full object-contain"
                          height="1205"
                          loading="lazy"
                          src="/images/portfolio/nxt-lvl-pza-mobile-app.webp"
                          width="1920"
                        />
                      </figure>
                    </ScrollReveal>
                    <ScrollReveal className="ml-auto w-[94%] sm:w-[86%]">
                      <figure className="overflow-hidden rounded-panel bg-white shadow-[var(--shadow-panel)]">
                        <img
                          alt="NXT LVL PZA loyalty application screens"
                          className="h-auto w-full object-contain"
                          height="848"
                          loading="lazy"
                          src="/images/portfolio/nxt-lvl-pza-loyalty.webp"
                          width="1920"
                        />
                      </figure>
                    </ScrollReveal>
                  </div>
                ) : null}
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <section
            aria-labelledby="technical-skills-title"
            className="border-t border-line-subtle pt-16 sm:pt-24"
          >
            <h2
              className="text-3xl font-semibold tracking-[-0.03em] text-ink-primary sm:text-4xl"
              id="technical-skills-title"
            >
              Technical Skills
            </h2>
            <div className="mt-10 divide-y divide-line-subtle border-y border-line-subtle">
              {skillGroups.map((group) => (
                <section
                  className="grid gap-4 py-6 md:grid-cols-[13rem_1fr] md:gap-10"
                  key={group.name}
                >
                  <h3 className="font-semibold text-ink-primary">
                    {group.name}
                  </h3>
                  <ul
                    aria-label={`${group.name} skills`}
                    className="flex flex-wrap gap-2"
                  >
                    {group.skills.map((skill) => (
                      <li
                        className="rounded-control bg-house-surface px-3 py-1.5 text-sm text-ink-secondary"
                        key={skill}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </section>
        </ScrollReveal>
      </div>
    </section>
  );
}
