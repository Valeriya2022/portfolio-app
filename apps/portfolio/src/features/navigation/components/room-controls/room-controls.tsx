import { Link, useRouterState } from '@tanstack/react-router';

import { rooms } from '../../model/rooms';

export function RoomControls() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const currentIndex = rooms.findIndex((room) => room.path === pathname);
  const previousRoom = currentIndex > 0 ? rooms[currentIndex - 1] : undefined;
  const nextRoom =
    currentIndex >= 0 && currentIndex < rooms.length - 1
      ? rooms[currentIndex + 1]
      : undefined;

  return (
    <nav
      aria-label="Room sequence"
      className="fixed inset-x-0 bottom-4 z-40 mx-auto flex w-fit max-w-[calc(100%-2rem)] items-center border border-line-default bg-house-overlay p-1 shadow-panel backdrop-blur-xl sm:bottom-6"
    >
      {previousRoom ? (
        <Link
          aria-label={`Previous room: ${previousRoom.navLabel}`}
          className="flex min-w-0 items-center gap-3 px-3 py-2 font-mono text-[0.6875rem] tracking-[0.08em] text-ink-muted uppercase transition-colors duration-[var(--duration-interaction)] hover:text-ink-primary sm:px-4"
          to={previousRoom.path}
        >
          <span aria-hidden="true" className="text-accent-primary">
            ←
          </span>
          <span className="truncate">{previousRoom.navLabel}</span>
        </Link>
      ) : (
        <span aria-hidden="true" className="w-10 sm:w-16" />
      )}

      <span aria-hidden="true" className="h-5 w-px shrink-0 bg-line-default" />

      {nextRoom ? (
        <Link
          aria-label={`Next room: ${nextRoom.navLabel}`}
          className="flex min-w-0 items-center gap-3 px-3 py-2 font-mono text-[0.6875rem] tracking-[0.08em] text-ink-muted uppercase transition-colors duration-[var(--duration-interaction)] hover:text-ink-primary sm:px-4"
          to={nextRoom.path}
        >
          <span className="truncate">{nextRoom.navLabel}</span>
          <span aria-hidden="true" className="text-accent-primary">
            →
          </span>
        </Link>
      ) : (
        <span aria-hidden="true" className="w-10 sm:w-16" />
      )}
    </nav>
  );
}
