import { Link, useRouterState } from '@tanstack/react-router';
import { useState } from 'react';

import { ThemeControl } from '../../../theme';
import { rooms } from '../../model/rooms';
import { RoomMap } from '../room-map';

const floors = [3, 2, 1] as const;

export function RoomNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const activeRoom = rooms.find((room) => room.path === pathname) ?? rooms[0];

  return (
    <header className="group fixed inset-x-0 top-0 z-50 h-16">
      {!isOpen ? (
        <button
          aria-controls="room-navigation"
          aria-expanded="false"
          className="fixed top-3 left-3 rounded-control border border-line-subtle bg-house-overlay px-3 py-2 font-mono text-[0.6875rem] tracking-[0.08em] text-ink-muted backdrop-blur-xl transition-[opacity,transform,color] duration-[var(--duration-panel)] hover:text-ink-primary md:left-1/2 md:-translate-x-1/2 md:-translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:focus-visible:translate-y-0 md:focus-visible:opacity-100"
          onClick={() => setIsOpen(true)}
          type="button"
        >
          Rooms · {String(activeRoom.floor).padStart(2, '0')}/
          {String(activeRoom.position).padStart(2, '0')}
        </button>
      ) : null}

      <nav
        aria-hidden={!isOpen}
        aria-label="Portfolio rooms"
        className={`fixed top-3 bottom-3 left-3 flex w-[min(18rem,calc(100%-1.5rem))] flex-col rounded-panel border border-line-subtle bg-house-surface/95 shadow-panel backdrop-blur-xl transition-[opacity,transform] duration-[var(--duration-panel)] ${
          isOpen
            ? 'translate-x-0 opacity-100'
            : '-translate-x-[calc(100%+1rem)] opacity-0'
        }`}
        id="room-navigation"
        inert={!isOpen}
      >
        <div className="flex items-center justify-between gap-3 px-4 py-3">
          <span className="font-mono text-xs font-semibold tracking-[0.14em] text-ink-primary">
            V.
          </span>
          <RoomMap />
          <button
            aria-label="Close navigation"
            className="rounded-control p-2 text-ink-muted hover:text-ink-primary"
            onClick={() => setIsOpen(false)}
            type="button"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto border-y border-line-subtle px-3 py-2">
          {floors.map((floor) => (
            <section className="py-2" key={floor}>
              <h2 className="px-2 pb-1 font-mono text-[0.625rem] tracking-[0.12em] text-ink-muted">
                Floor {floor}
              </h2>
              <ul>
                {rooms
                  .filter((room) => room.floor === floor)
                  .sort((first, second) => first.position - second.position)
                  .map((room) => (
                    <li key={room.id}>
                      <Link
                        activeOptions={{ exact: true }}
                        activeProps={{ 'aria-current': 'page' }}
                        className="block rounded-control px-2 py-2 font-mono text-xs text-ink-muted transition-colors duration-[var(--duration-interaction)] hover:bg-house-elevated/50 hover:text-ink-primary [&[data-status=active]]:text-accent-primary"
                        onClick={() => setIsOpen(false)}
                        to={room.path}
                      >
                        {room.navLabel}
                      </Link>
                    </li>
                  ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 px-4 py-3">
          <span className="font-mono text-[0.625rem] text-ink-muted">
            {activeRoom.navLabel}
          </span>
          <ThemeControl />
        </div>
      </nav>
    </header>
  );
}
