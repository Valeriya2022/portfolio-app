import { Link, useRouterState } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';

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
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const activeRoom = rooms.find((room) => room.path === pathname) ?? rooms[0];

  useEffect(() => {
    if (!isOpen) return;

    const closeOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('pointerdown', closeOutside);
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.removeEventListener('pointerdown', closeOutside);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  return (
    <header
      className="glass-surface fixed inset-x-3 top-3 z-50 rounded-panel lg:inset-x-5"
      ref={headerRef}
    >
      <div className="mx-auto flex h-14 max-w-[90rem] items-center gap-5 px-room-inline">
        <Link
          aria-label="Portfolio home"
          className="shrink-0 text-sm font-semibold text-ink-primary"
          to="/"
        >
          V.
        </Link>

        <nav
          aria-label="Portfolio rooms"
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
          className="glass-control shrink-0 px-3 py-1.5 text-xs aria-pressed:text-accent-primary"
          onClick={() => {
            setIsOpen(false);
            onVisualize();
          }}
          type="button"
        >
          Visualize menu
        </button>
        <button
          aria-controls="mobile-room-navigation"
          aria-expanded={isOpen}
          className="glass-control px-3 py-1.5 text-xs lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {isOpen ? (
        <nav
          aria-label="Mobile portfolio rooms"
          className="border-t border-line-subtle px-room-inline py-4 lg:hidden"
          id="mobile-room-navigation"
        >
          <div className="flex gap-5 overflow-x-auto pb-2">
            {rooms.map((room) => (
              <Link
                activeOptions={{ exact: true }}
                activeProps={{ 'aria-current': 'page' }}
                className="shrink-0 rounded-control py-2 text-xs text-ink-muted [&[data-status=active]]:text-ink-primary"
                key={room.id}
                onClick={() => setIsOpen(false)}
                to={room.path}
              >
                {room.navLabel}
              </Link>
            ))}
          </div>
          <div className="mt-3 flex justify-end border-t border-line-subtle pt-3">
            <ThemeControl />
          </div>
        </nav>
      ) : null}
    </header>
  );
}
