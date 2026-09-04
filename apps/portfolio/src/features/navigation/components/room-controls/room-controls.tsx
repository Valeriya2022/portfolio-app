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
        <span className="group pointer-events-auto absolute inset-y-20 left-0 hidden w-40 items-center md:flex">
          <Link
            aria-label={`Room to the left: ${leftRoom.navLabel}`}
            className="relative flex h-56 w-5 overflow-hidden rounded-r-panel border-y border-r border-line-subtle bg-house-surface text-ink-secondary transition-[width,background-color,border-color] duration-[var(--duration-room)] ease-[var(--ease-spatial)] group-hover:w-36 hover:border-line-default hover:bg-house-elevated focus-visible:w-36"
            to={leftRoom.path}
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-[var(--room-light)] to-transparent"
            />
            <span className="relative my-auto flex min-w-36 items-center gap-3 px-4 opacity-0 transition-opacity delay-75 duration-[var(--duration-panel)] group-hover:opacity-100 group-focus-within:opacity-100">
              <span aria-hidden="true">←</span>
              {leftRoom.navLabel}
            </span>
          </Link>
        </span>
      ) : null}

      {rightRoom ? (
        <span className="group pointer-events-auto absolute inset-y-20 right-0 hidden w-40 items-center justify-end md:flex">
          <Link
            aria-label={`Room to the right: ${rightRoom.navLabel}`}
            className="relative flex h-56 w-5 overflow-hidden rounded-l-panel border-y border-l border-line-subtle bg-house-surface text-ink-secondary transition-[width,background-color,border-color] duration-[var(--duration-room)] ease-[var(--ease-spatial)] group-hover:w-36 hover:border-line-default hover:bg-house-elevated focus-visible:w-36"
            to={rightRoom.path}
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-l from-[var(--room-light)] to-transparent"
            />
            <span className="relative my-auto ml-auto flex min-w-36 items-center justify-end gap-3 px-4 opacity-0 transition-opacity delay-75 duration-[var(--duration-panel)] group-hover:opacity-100 group-focus-within:opacity-100">
              {rightRoom.navLabel}
              <span aria-hidden="true">→</span>
            </span>
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
