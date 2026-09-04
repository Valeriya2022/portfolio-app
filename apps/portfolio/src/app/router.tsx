import {
  createRootRoute,
  createRoute,
  createRouter,
  type RouterHistory,
} from '@tanstack/react-router';

import { AboutRoom } from '../features/about';
import { AiRoom } from '../features/ai';
import { ArchitectureRoom } from '../features/architecture';
import { BackendRoom } from '../features/backend';
import { ContactRoom } from '../features/contact';
import { ExperienceRoom } from '../features/experience';
import { FrontendRoom } from '../features/frontend';
import { ProjectsRoom } from '../features/projects';
import { App } from './app';

const rootRoute = createRootRoute({ component: App });

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: AboutRoom,
});

const frontendRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/frontend',
  component: FrontendRoom,
});

const backendRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/backend',
  component: BackendRoom,
});

const aiRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ai',
  component: AiRoom,
});

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects',
  component: ProjectsRoom,
});

const architectureRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/architecture',
  component: ArchitectureRoom,
});

const experienceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/experience',
  component: ExperienceRoom,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactRoom,
});

const routeTree = rootRoute.addChildren([
  aboutRoute,
  frontendRoute,
  backendRoute,
  aiRoute,
  projectsRoute,
  architectureRoute,
  experienceRoute,
  contactRoute,
]);

export function createPortfolioRouter(history?: RouterHistory) {
  return createRouter({
    defaultPreload: 'intent',
    history,
    routeTree,
    scrollRestoration: history === undefined,
  });
}

export const router = createPortfolioRouter();

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
