import { ScrollReveal } from '@learning-app/motion';

import { ProjectMedia } from '../project-media';

const experiences = [
  {
    achievements: [
      'Led frontend development across ~10 web applications and set up an Nx monorepo with a shared UI component library, packages, and dependencies, reducing duplicated work and accelerating development across products.',
      'Built and launched 3 web applications from scratch; selected React/PWA for an internal dashboard requiring fast loading and reliable use on poor networks, and Astro for a lightweight, fast landing page.',
      'Adopted Vertical Slice or Feature-Sliced Design architecture depending on application size and complexity, keeping code organized around business features and maintaining clear module boundaries as applications grew.',
      'Turned team coding conventions into automated linting and pre-commit checks, reducing back-and-forth in code reviews and keeping standards consistent across the codebase.',
      'Developed REST APIs, admin functionality, and business logic with C#/.NET 9; worked with PostgreSQL and MongoDB.',
      'Built a reporting bot that processed application data and automated weekly updates, replacing a recurring manual workflow.',
      'Leveraged AI-assisted development tools to accelerate implementation and debugging, while reviewing generated code to ensure reuse of existing components, avoid unnecessary complexity, and maintain architectural consistency.',
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
    achievements: [
      'Delivered a React Native iOS ordering app with card payments and Apple Pay from initial development to production within 4 months, working in a fast-moving startup environment with rapid iterations and frequent releases.',
      'Chose a React-based, mobile-first approach to enable fast expansion beyond iOS, reusing and adapting the codebase to deliver a React/Next.js web app in 1 month.',
      'Built native mobile integrations, including camera events, and implemented WebSocket communication for real-time application updates.',
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
    achievements: [
      'Modernized ~80% of a legacy JavaScript application in React and TypeScript, simplifying future development and significantly reducing the time required to deliver new features and changes.',
      'Built core functionality for a production queue management platform, implementing polling-based real-time monitoring of queues.',
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

const selectedProjects = [
  {
    company: 'LLP ABR Tech',
    title: 'Configurable Restaurant Dashboard',
    problem:
      'Every new report for marketing, delivery, or management required Analytics to prepare data, Backend to build an API, and Frontend to implement the UI.',
    contribution:
      'I built a configurable frontend system that transformed raw data into calculated metrics, tables, Recharts visualizations, and reusable widgets for role-specific dashboards.',
    result:
      'Restricted-access SQL queries and frontend data transformation enabled one-time Analytics setup while keeping sensitive data access role-based.',
  },
  {
    company: 'NXT LVL PZA',
    title: 'Mobile & Web Ordering Platform',
    problem:
      'The startup needed to launch quickly on iOS and have a fast route to users beyond iOS.',
    contribution:
      'I chose a React-based, mobile-first architecture and built the React Native ordering app with card payments, Apple Pay, native camera events, and WebSocket updates. I then reused and adapted the codebase for React/Next.js.',
    result:
      'The iOS product went from initial development to production in 4 months, followed by the web application in 1 month.',
  },
  {
    company: 'LLP Bass Technology',
    title: 'Electronic Queue Management Platform',
    problem:
      'A legacy JavaScript application and desktop workflows were difficult to develop and maintain.',
    contribution:
      'I rewrote approximately 80% of the application in React and TypeScript, migrated desktop workflows to the web, and built polling-based real-time monitoring of queues, employees, and departments.',
    result:
      'The modernized codebase made maintenance easier and reduced the time needed to deliver new features and changes.',
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
      'Astro',
      'Gatsby',
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
      'Apple Pay',
      'Firebase',
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
      'AI-assisted development',
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
            <p className="mt-5 max-w-3xl text-base leading-7 text-ink-secondary sm:text-lg">
              Open to{' '}
              <strong className="font-semibold text-ink-primary">
                software engineering opportunities from February 2027
              </strong>{' '}
              — CDI · CDD in France, ideally remote or with limited on-site
              presence.
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

                <ul
                  aria-label={`${experience.company} responsibilities and achievements`}
                  className="mt-10 list-disc space-y-4 pl-5 leading-7 text-ink-secondary marker:text-accent-primary"
                >
                  {experience.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>

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

        <section
          aria-labelledby="selected-projects-title"
          className="border-t border-line-subtle py-16 sm:py-24"
        >
          <h2
            id="selected-projects-title"
            className="text-3xl font-semibold tracking-[-0.03em] text-ink-primary sm:text-4xl"
          >
            Selected Projects
          </h2>
          <div className="mt-10 space-y-12">
            {selectedProjects.map((project) => (
              <ScrollReveal key={project.title}>
                <article aria-label={project.title}>
                  <p className="text-sm font-medium text-accent-primary">
                    {project.company}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink-primary sm:text-2xl">
                    {project.title}
                  </h3>
                  <dl className="mt-5 space-y-4 leading-7">
                    {[
                      ['Problem', project.problem],
                      ['My contribution', project.contribution],
                      ['Architecture & result', project.result],
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
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

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
            <section className="grid gap-4 border-b border-line-subtle py-6 md:grid-cols-[13rem_1fr] md:gap-10">
              <h3 className="font-semibold text-ink-primary">
                Technical Communication
              </h3>
              <p className="leading-7 text-ink-secondary">
                I break down complex technical problems into simple, clear
                explanations that anyone can understand.
              </p>
            </section>
          </section>
        </ScrollReveal>
      </div>
    </section>
  );
}
