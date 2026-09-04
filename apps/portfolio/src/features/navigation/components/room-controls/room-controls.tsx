import { Link, useRouterState } from '@tanstack/react-router';

import { getAdjacentRoom, rooms } from '../../model/rooms';

export function RoomControls() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const currentRoom = rooms.find((room) => room.path === pathname) ?? rooms[0];
  const leftRoom = getAdjacentRoom(currentRoom, 'left');
  const rightRoom = getAdjacentRoom(currentRoom, 'right');
  const upperRoom = getAdjacentRoom(currentRoom, 'up');
  const lowerRoom = getAdjacentRoom(currentRoom, 'down');

  return (
    <nav
      aria-label="Spatial room controls"
      className="pointer-events-none fixed inset-0 z-40 font-mono text-[0.625rem] tracking-[0.14em] uppercase"
    >
      {leftRoom ? (
        <span className="group pointer-events-auto absolute inset-y-28 left-0 flex w-20 items-center justify-start sm:w-28">
          <Link
            aria-label={`Room to the left: ${leftRoom.navLabel}`}
            className="flex size-10 -translate-x-2 items-center justify-center rounded-control border border-line-default bg-house-overlay text-ink-muted opacity-0 shadow-panel backdrop-blur-xl transition-[opacity,transform,border-color,color] duration-[var(--duration-panel)] group-hover:translate-x-3 group-hover:opacity-100 hover:border-line-luminous hover:text-ink-primary focus-visible:translate-x-3 focus-visible:opacity-100 [@media(pointer:coarse)]:translate-x-2 [@media(pointer:coarse)]:opacity-100 sm:group-hover:translate-x-5 sm:focus-visible:translate-x-5"
            to={leftRoom.path}
          >
            <span aria-hidden="true">←</span>
          </Link>
        </span>
      ) : null}

      {rightRoom ? (
        <span className="group pointer-events-auto absolute inset-y-28 right-0 flex w-20 items-center justify-end sm:w-28">
          <Link
            aria-label={`Room to the right: ${rightRoom.navLabel}`}
            className="flex size-10 translate-x-2 items-center justify-center rounded-control border border-line-default bg-house-overlay text-ink-muted opacity-0 shadow-panel backdrop-blur-xl transition-[opacity,transform,border-color,color] duration-[var(--duration-panel)] group-hover:-translate-x-3 group-hover:opacity-100 hover:border-line-luminous hover:text-ink-primary focus-visible:-translate-x-3 focus-visible:opacity-100 [@media(pointer:coarse)]:-translate-x-2 [@media(pointer:coarse)]:opacity-100 sm:group-hover:-translate-x-5 sm:focus-visible:-translate-x-5"
            to={rightRoom.path}
          >
            <span aria-hidden="true">→</span>
          </Link>
        </span>
      ) : null}

      {upperRoom ? (
        <span className="group pointer-events-auto absolute top-20 left-1/2 flex h-24 w-40 -translate-x-1/2 items-start justify-center">
          <Link
            aria-label={`Room above: ${upperRoom.navLabel}`}
            className="flex -translate-y-2 items-center rounded-control border border-line-default bg-house-overlay px-3 py-2 text-ink-muted opacity-0 shadow-panel backdrop-blur-xl transition-[opacity,transform,border-color,color] duration-[var(--duration-panel)] group-hover:translate-y-3 group-hover:opacity-100 hover:border-line-luminous hover:text-ink-primary focus-visible:translate-y-3 focus-visible:opacity-100 [@media(pointer:coarse)]:translate-y-12 [@media(pointer:coarse)]:opacity-100 md:[@media(pointer:coarse)]:translate-y-3"
            to={upperRoom.path}
          >
            <span aria-hidden="true">↑</span>
          </Link>
        </span>
      ) : null}

      {lowerRoom ? (
        <span className="group pointer-events-auto absolute inset-x-20 bottom-0 flex h-24 items-end justify-center sm:inset-x-28">
          <Link
            aria-label={`Room below: ${lowerRoom.navLabel}`}
            className="mb-4 flex translate-y-2 items-center rounded-control border border-line-default bg-house-overlay px-3 py-2 text-ink-muted opacity-0 shadow-panel backdrop-blur-xl transition-[opacity,transform,border-color,color] duration-[var(--duration-panel)] group-hover:translate-y-0 group-hover:opacity-100 hover:border-line-luminous hover:text-ink-primary focus-visible:translate-y-0 focus-visible:opacity-100 [@media(pointer:coarse)]:translate-y-0 [@media(pointer:coarse)]:opacity-100 sm:mb-6"
            to={lowerRoom.path}
          >
            <span aria-hidden="true">↓</span>
          </Link>
        </span>
      ) : null}
    </nav>
  );
}
