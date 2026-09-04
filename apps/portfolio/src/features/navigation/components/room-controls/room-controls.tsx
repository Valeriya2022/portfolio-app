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
      aria-label="Spatial room controls"
      className="pointer-events-none fixed inset-0 z-40 font-mono text-[0.625rem] tracking-[0.14em] uppercase"
    >
      {previousRoom ? (
        <Link
          aria-label={`Previous room: ${previousRoom.navLabel}`}
          className="pointer-events-auto absolute top-1/2 left-2 flex -translate-y-1/2 items-center gap-2 border border-line-default bg-house-overlay px-2 py-3 text-ink-muted shadow-panel backdrop-blur-xl transition-colors duration-[var(--duration-interaction)] hover:border-line-luminous hover:text-ink-primary sm:left-5 sm:px-3"
          to={previousRoom.path}
        >
          <span aria-hidden="true" className="text-accent-primary">
            ←
          </span>
          <span className="hidden [writing-mode:vertical-rl] sm:block">
            {previousRoom.navLabel}
          </span>
        </Link>
      ) : null}

      {nextRoom ? (
        <Link
          aria-label={`Next room: ${nextRoom.navLabel}`}
          className="pointer-events-auto absolute top-1/2 right-2 flex -translate-y-1/2 items-center gap-2 border border-line-default bg-house-overlay px-2 py-3 text-ink-muted shadow-panel backdrop-blur-xl transition-colors duration-[var(--duration-interaction)] hover:border-line-luminous hover:text-ink-primary sm:right-5 sm:px-3"
          to={nextRoom.path}
        >
          <span className="hidden [writing-mode:vertical-rl] sm:block">
            {nextRoom.navLabel}
          </span>
          <span aria-hidden="true" className="text-accent-primary">
            →
          </span>
        </Link>
      ) : null}

      <a
        className="pointer-events-auto absolute top-32 left-1/2 flex -translate-x-1/2 items-center gap-2 border border-line-default bg-house-overlay px-3 py-2 text-ink-muted shadow-panel backdrop-blur-xl transition-colors duration-[var(--duration-interaction)] hover:border-line-luminous hover:text-ink-primary md:top-24"
        href="#room-detail"
      >
        <span aria-hidden="true" className="text-accent-primary">
          ↑
        </span>
        Detail
      </a>

      <a
        className="pointer-events-auto absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 border border-line-default bg-house-overlay px-3 py-2 text-ink-muted shadow-panel backdrop-blur-xl transition-colors duration-[var(--duration-interaction)] hover:border-line-luminous hover:text-ink-primary sm:bottom-6"
        href="#room-entrance"
      >
        <span aria-hidden="true" className="text-accent-primary">
          ↓
        </span>
        Back
      </a>

      <span
        aria-hidden="true"
        className="absolute top-1/2 left-0 h-px w-2 -translate-y-1/2 bg-line-luminous sm:w-5"
      />
      <span
        aria-hidden="true"
        className="absolute top-1/2 right-0 h-px w-2 -translate-y-1/2 bg-line-luminous sm:w-5"
      />
    </nav>
  );
}
