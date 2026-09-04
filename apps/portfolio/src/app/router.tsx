import {
  createRootRoute,
  createRoute,
  createRouter,
  type RouterHistory,
} from '@tanstack/react-router';

import { AboutRoom } from '../features/about';
import { RoomPlaceholder, rooms } from '../features/navigation';
import { App } from './app';

const rootRoute = createRootRoute({ component: App });

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: AboutRoom,
});

const placeholderRoutes = rooms.slice(1).map((room) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path: room.path,
    component: () => <RoomPlaceholder room={room} />,
  }),
);

const routeTree = rootRoute.addChildren([aboutRoute, ...placeholderRoutes]);

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
