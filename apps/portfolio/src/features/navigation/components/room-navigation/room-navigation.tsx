import { Link, useRouterState } from '@tanstack/react-router';
import { useState } from 'react';

import { ThemeControl } from '../../../theme';
import { rooms } from '../../model/rooms';

export function RoomNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const activeRoom = rooms.find((room) => room.path === pathname) ?? rooms[0];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line-subtle bg-house-canvas/90 backdrop-blur-md">
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
          aria-controls="mobile-room-navigation"
          aria-expanded={isOpen}
          className="text-xs text-ink-primary lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {isOpen ? (
        <nav
          aria-label="Mobile portfolio rooms"
          className="border-t border-line-subtle bg-house-canvas px-room-inline py-4 lg:hidden"
          id="mobile-room-navigation"
        >
          <div className="grid grid-cols-3 gap-x-4 gap-y-1">
            {rooms.map((room) => (
              <Link
                activeOptions={{ exact: true }}
                activeProps={{ 'aria-current': 'page' }}
                className="rounded-control py-2 text-xs text-ink-muted [&[data-status=active]]:text-ink-primary"
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
