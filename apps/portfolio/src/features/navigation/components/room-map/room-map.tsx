import { useRouterState } from '@tanstack/react-router';

import { rooms } from '../../model/rooms';

export function RoomMap() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const activeRoom = rooms.find((room) => room.path === pathname) ?? rooms[0];

  return (
    <div
      aria-label={`Current position: ${activeRoom.navLabel}`}
      className="flex items-center gap-3"
      role="img"
    >
      <span className="hidden font-mono text-[0.625rem] tracking-[0.16em] text-ink-muted uppercase sm:inline">
        Map / {String(activeRoom.number).padStart(2, '0')}
      </span>
      <span className="grid grid-cols-4 gap-1 border border-line-default bg-house-canvas/80 p-1.5 shadow-glow [transform:skewX(-8deg)]">
        {rooms.map((room) => (
          <span
            aria-hidden="true"
            className={
              room.id === activeRoom.id
                ? 'size-1.5 bg-[var(--room-accent)] shadow-glow-strong'
                : 'size-1.5 bg-line-default'
            }
            key={room.id}
          />
        ))}
      </span>
    </div>
  );
}
