import { ScrollReveal } from '@learning-app/motion';

import { ProjectMedia } from '../project-media';

const experiences = [
  {
    stories: [
      {
        title: 'Configurable Restaurant Dashboard',
        problem:
          'Every new report for marketing, delivery, or management required Analytics to prepare data, Backend to build an API, and Frontend to implement the UI.',
        contribution:
          'I built a configurable frontend system that transformed raw data into calculated metrics, tables, Recharts visualizations, and reusable widgets for role-specific dashboards.',
        result:
          'Restricted-access SQL queries and frontend data transformation enabled one-time Analytics setup while keeping sensitive data access role-based.',
      },
      {
        title: 'Shared Architecture Across ~10 Applications',
        problem:
          'A growing collection of web applications needed less duplication, simpler maintenance, and consistent development practices.',
        contribution:
          'I set up an Nx monorepo with shared libraries and tooling, choosing Vertical Slice or Feature-Sliced Design according to each application’s size and complexity.',
        result:
          'Shared code reduced duplication, while feature-based organization and clear module boundaries kept the applications maintainable as they grew.',
      },
      {
        title: 'Three Applications from Scratch to Production',
        problem:
          'A lightweight landing page and an internal dashboard had different requirements: fast page delivery for one, reliable use on poor networks for the other.',
        contribution:
          'I selected Astro for the landing page and React/PWA for the dashboard, and developed REST APIs, admin functionality, and business logic with C#/.NET 9, PostgreSQL, and MongoDB.',
        result:
          'I brought three new web applications to production, choosing the technology around the needs of each product.',
      },
      {
        title: 'Automated Quality Checks & Reporting',
        problem:
          'Coding conventions needed consistent enforcement, and weekly reporting relied on a recurring manual workflow.',
        contribution:
          'I turned team conventions into automated linting and pre-commit checks, and built a reporting bot that processed application data.',
        result:
          'Automated checks reduced back-and-forth in code reviews, and the bot replaced manual weekly updates.',
      },
    ],
    company: 'LLP ABR Tech',
    dates:
      'Feb 2024 - Aug 2025 full-time, on-site · Sep 2025 - present part-time',
    location: 'Almaty, Kazakhstan · hybrid/remote',
    media: 'abr-tech',
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
    stories: [
      {
        title: 'Mobile & Web Ordering Platform',
        problem:
          'The startup needed to launch quickly on iOS and have a fast route to users beyond iOS.',
        contribution:
          'I chose a React-based, mobile-first architecture and built the React Native ordering app with card payments, Apple Pay, native camera events, and WebSocket updates. I then reused and adapted the codebase for React/Next.js.',
        result:
          'The iOS product went from initial development to production in 4 months, followed by the web application in 1 month.',
      },
    ],
    company: 'NXT LVL PZA',
    dates: 'Jul 2022 - Feb 2023',
    location: 'London, UK · remote',
    media: 'nxt-lvl-pza',
    metric: '4 + 1',
    metricLabel: 'months: iOS to production, then web',
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
    stories: [
      {
        title: 'Electronic Queue Management Platform',
        problem:
          'A legacy JavaScript application and desktop workflows were difficult to develop and maintain.',
        contribution:
          'I rewrote approximately 80% of the application in React and TypeScript, migrated desktop workflows to the web, and built polling-based real-time monitoring of queues, employees, and departments.',
        result:
          'The modernized codebase made maintenance easier and reduced the time needed to deliver new features and changes.',
      },
    ],
    company: 'LLP Bass Technology',
    dates: 'Jul 2020 - Jul 2022',
    location: 'Almaty, Kazakhstan · on-site',
    media: 'none',
    metric: '~80%',
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
      'PWA',
      'WebSockets',
      'Authentication / authorization / Single Sign-On',
    ],
  },
  {
    name: 'Architecture',
    skills: [
      'Frontend architecture',
      'Feature-Sliced Design',
      'Vertical Slice Architecture',
      'Nx monorepos',
      'Performance optimization',
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
      'Husky',
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

                <div className="mt-12 space-y-10">
                  {experience.stories.map((story, index) => (
                    <ScrollReveal delay={index * 0.04} key={story.title}>
                      <section aria-label={story.title}>
                        <h3 className="text-xl font-semibold tracking-tight text-ink-primary sm:text-2xl">
                          {story.title}
                        </h3>
                        <dl className="mt-5 space-y-4 leading-7">
                          {[
                            ['Problem', story.problem],
                            ['My contribution', story.contribution],
                            ['Architecture & result', story.result],
                          ].map(([label, text]) => (
                            <div
                              className="grid gap-1 sm:grid-cols-[11rem_1fr] sm:gap-6"
                              key={label}
                            >
                              <dt className="font-semibold text-accent-primary">
                                {label}
                              </dt>
                              <dd className="text-ink-secondary">{text}</dd>
                            </div>
                          ))}
                        </dl>
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

                {experience.media === 'abr-tech' ? (
                  <div
                    aria-label="LLP ABR Tech project recordings"
                    className="mt-12 grid grid-cols-3 items-start gap-2 sm:gap-4"
                    role="group"
                  >
                    {[
                      '/videos/portfolio/abr-tech-project-01.mp4',
                      '/videos/portfolio/abr-tech-project-02.mp4',
                      '/videos/portfolio/abr-tech-project-03.mp4',
                    ].map((video, index) => (
                      <ScrollReveal delay={index * 0.04} key={video}>
                        <ProjectMedia
                          label={`LLP ABR Tech project recording ${index + 1}`}
                          src={video}
                          type="video"
                        />
                      </ScrollReveal>
                    ))}
                  </div>
                ) : null}

                {experience.media === 'nxt-lvl-pza' ? (
                  <div
                    aria-label="NXT LVL PZA product screenshots"
                    className="mt-12 space-y-4"
                    role="group"
                  >
                    <ScrollReveal>
                      <ProjectMedia
                        height="1205"
                        label="NXT LVL PZA mobile ordering application screens"
                        src="/images/portfolio/nxt-lvl-pza-mobile-app.webp"
                        type="image"
                        width="1920"
                      />
                    </ScrollReveal>
                    <ScrollReveal className="ml-auto w-[94%] sm:w-[86%]">
                      <ProjectMedia
                        height="848"
                        label="NXT LVL PZA loyalty application screens"
                        src="/images/portfolio/nxt-lvl-pza-loyalty.webp"
                        type="image"
                        width="1920"
                      />
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
