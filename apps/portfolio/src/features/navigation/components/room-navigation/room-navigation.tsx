import { Link } from '@tanstack/react-router';
import { useState } from 'react';

import { ThemeControl } from '../../../theme';
import { rooms } from '../../model/rooms';
import { RoomMap } from '../room-map';

export function RoomNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="group fixed inset-x-0 top-0 z-50 h-24">
      {!isOpen ? (
        <button
          aria-controls="room-navigation"
          aria-expanded="false"
          className="fixed top-3 left-3 rounded-control border border-line-subtle bg-house-overlay px-3 py-2 font-mono text-[0.6875rem] tracking-[0.08em] text-ink-muted backdrop-blur-xl md:hidden"
          onClick={() => setIsOpen(true)}
          type="button"
        >
          Menu
        </button>
      ) : null}

      <nav
        aria-label="Portfolio rooms"
        className={`pointer-events-auto fixed top-3 bottom-3 left-3 flex w-[min(18rem,calc(100%-1.5rem))] flex-col rounded-panel border border-line-subtle bg-house-surface/95 shadow-panel backdrop-blur-xl transition-[opacity,transform] duration-[var(--duration-panel)] ${
          isOpen
            ? 'translate-x-0 opacity-100'
            : '-translate-x-[calc(100%+1rem)] opacity-0'
        } md:absolute md:inset-x-room-inline md:top-3 md:bottom-auto md:mx-auto md:w-auto md:max-w-[90rem] md:flex-row md:items-center md:justify-between md:translate-x-0 md:-translate-y-3 md:bg-house-overlay md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100`}
        id="room-navigation"
      >
        <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-5">
          <Link
            aria-label="Portfolio home"
            className="font-mono text-xs font-semibold tracking-[0.14em] text-ink-primary transition-colors duration-[var(--duration-interaction)] hover:text-accent-primary"
            onClick={() => setIsOpen(false)}
            to="/"
          >
            V.
          </Link>
          <div className="flex items-center gap-3">
            <ThemeControl />
            <RoomMap />
          </div>
          <button
            aria-label="Close navigation"
            className="rounded-control p-2 text-ink-muted hover:text-ink-primary md:hidden"
            onClick={() => setIsOpen(false)}
            type="button"
          >
            ×
          </button>
        </div>

        <ul className="grid gap-1 overflow-y-auto border-t border-line-subtle p-3 md:flex md:overflow-visible md:border-t-0 md:p-2">
          {rooms.map((room) => (
            <li key={room.id}>
              <Link
                activeOptions={{ exact: true }}
                activeProps={{ 'aria-current': 'page' }}
                className="block rounded-control px-3 py-2.5 font-mono text-[0.6875rem] tracking-[0.06em] text-ink-muted transition-colors duration-[var(--duration-interaction)] hover:bg-house-elevated/50 hover:text-ink-primary md:px-2 md:py-2 [&[data-status=active]]:text-accent-primary"
                onClick={() => setIsOpen(false)}
                to={room.path}
              >
                {room.navLabel}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
