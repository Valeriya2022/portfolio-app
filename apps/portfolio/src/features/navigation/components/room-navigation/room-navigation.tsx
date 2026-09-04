import { Link } from '@tanstack/react-router';

import { rooms } from '../../model/rooms';
import { RoomMap } from '../room-map';

export function RoomNavigation() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-room-inline sm:pt-5">
      <nav
        aria-label="Portfolio rooms"
        className="mx-auto flex max-w-[90rem] flex-wrap items-center justify-between border border-line-default bg-house-overlay shadow-panel backdrop-blur-xl"
      >
        <div className="flex w-full items-center justify-between gap-6 px-4 py-3 md:w-auto md:px-5">
          <Link
            aria-label="Portfolio home"
            className="font-mono text-xs font-semibold tracking-[0.18em] text-ink-primary uppercase transition-colors duration-[var(--duration-interaction)] hover:text-accent-primary"
            to="/"
          >
            V / Dev House
          </Link>
          <RoomMap />
        </div>

        <ul className="flex w-full gap-1 overflow-x-auto border-t border-line-subtle px-2 py-2 md:w-auto md:border-t-0 md:px-3">
          {rooms.map((room) => (
            <li className="shrink-0" key={room.id}>
              <Link
                activeOptions={{ exact: true }}
                activeProps={{ 'aria-current': 'page' }}
                className="block px-2.5 py-2 font-mono text-[0.6875rem] tracking-[0.1em] text-ink-muted uppercase transition-colors duration-[var(--duration-interaction)] hover:text-ink-primary [&[data-status=active]]:text-accent-primary"
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
