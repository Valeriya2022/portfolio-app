import {
  createRootRoute,
  createRoute,
  createRouter,
  type RouterHistory,
} from '@tanstack/react-router';

import { AboutRoom } from '../features/about';
import { ProjectsRoom } from '../features/projects';
import { App } from './app';

const rootRoute = createRootRoute({ component: App });

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: AboutRoom,
});

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/portfolio',
  component: ProjectsRoom,
});

// Additional sections remain implemented in their feature folders and can be
// restored after the first release by registering them here again.
const routeTree = rootRoute.addChildren([aboutRoute, projectsRoute]);

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
