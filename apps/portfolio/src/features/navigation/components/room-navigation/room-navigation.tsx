import { Link, useRouterState } from '@tanstack/react-router';

import { ThemeControl } from '../../../theme';
import { rooms } from '../../model/rooms';

export type RoomNavigationProps = {
  isVisualizing: boolean;
  onVisualize: () => void;
};

export function RoomNavigation({
  isVisualizing,
  onVisualize,
}: RoomNavigationProps) {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const activeRoom = rooms.find((room) => room.path === pathname) ?? rooms[0];

  return (
    <header className="glass-surface fixed inset-x-3 top-3 z-50 max-w-[calc(100vw-1.5rem)] rounded-panel lg:inset-x-5 lg:max-w-none">
      <div className="mx-auto flex h-12 min-w-0 max-w-[90rem] items-center gap-3 px-4 sm:h-14 sm:gap-5 sm:px-room-inline">
        <Link
          aria-label="Portfolio home"
          className="shrink-0 text-sm font-semibold text-ink-primary"
          to="/"
        >
          V.
        </Link>

        <nav
          aria-label="Portfolio sections"
          className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex"
        >
          {rooms.map((room) => (
            <Link
              activeOptions={{ exact: true }}
              activeProps={{ 'aria-current': 'page' }}
              className="rounded-control px-2 py-1.5 text-xs text-ink-muted transition-colors duration-[var(--duration-interaction)] hover:text-ink-primary [&[data-status=active]]:text-ink-primary"
              key={room.id}
              to={room.path}
            >
              {room.navLabel}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden shrink-0 items-center gap-3 lg:flex">
          <ThemeControl />
        </div>

        <span className="ml-auto truncate text-xs text-ink-muted lg:hidden">
          {activeRoom.navLabel}
        </span>
        <button
          aria-pressed={isVisualizing}
          className="glass-control shrink-0 px-2.5 py-1.5 text-xs sm:px-3 aria-pressed:text-accent-primary"
          onClick={onVisualize}
          type="button"
        >
          Visualize menu
        </button>
      </div>
    </header>
  );
}
