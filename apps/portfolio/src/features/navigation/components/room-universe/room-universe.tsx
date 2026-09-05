import { SpatialRing, type SpatialRingItem } from '@learning-app/motion';
import { useNavigate, useRouterState } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

import { rooms } from '../../model/rooms';

const ringItems = rooms.map((room) => ({
  id: room.id,
  label: room.navLabel,
}));

export function RoomUniverse() {
  const [isOverview, setIsOverview] = useState(false);
  const navigate = useNavigate();
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const activeIndex = Math.max(
    rooms.findIndex((room) => room.path === pathname),
    0,
  );

  useEffect(() => {
    if (!isOverview) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOverview(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [isOverview]);

  const selectRoom = (item: SpatialRingItem) => {
    const room = rooms.find((candidate) => candidate.id === item.id);
    if (room) void navigate({ to: room.path });
    setIsOverview(false);
  };

  return (
    <>
      <SpatialRing
        activeIndex={activeIndex}
        items={ringItems}
        onSelect={selectRoom}
        overview={isOverview}
      />
      <button
        aria-pressed={isOverview}
        className="fixed right-room-inline bottom-5 z-50 rounded-control border border-line-subtle bg-house-canvas/90 px-3 py-2 text-xs text-ink-secondary backdrop-blur-md transition-colors hover:text-ink-primary md:bottom-6"
        onClick={() => setIsOverview((overview) => !overview)}
        type="button"
      >
        {isOverview ? 'Enter room' : 'View rooms'}
      </button>
      {isOverview ? (
        <p className="pointer-events-none fixed inset-x-0 bottom-7 z-40 hidden text-center text-xs text-ink-muted md:block">
          Select a room or return to the current one
        </p>
      ) : null}
    </>
  );
}
