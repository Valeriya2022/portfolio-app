import { SpatialRing, type SpatialRingItem } from '@learning-app/motion';
import { useNavigate, useRouterState } from '@tanstack/react-router';
import { useEffect } from 'react';

import { publishedRooms } from '../../model/rooms';

const ringItems = publishedRooms.map((room) => ({
  description: room.summary,
  id: room.id,
  label: room.navLabel,
}));

export type RoomUniverseProps = {
  isOverview: boolean;
  onOverviewChange: (isOverview: boolean) => void;
};

export function RoomUniverse({
  isOverview,
  onOverviewChange,
}: RoomUniverseProps) {
  const navigate = useNavigate();
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const activeIndex = Math.max(
    publishedRooms.findIndex((room) => room.path === pathname),
    0,
  );

  useEffect(() => {
    if (!isOverview) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onOverviewChange(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [isOverview, onOverviewChange]);

  const selectRoom = (item: SpatialRingItem) => {
    const room = publishedRooms.find((candidate) => candidate.id === item.id);
    if (room) void navigate({ to: room.path });
    onOverviewChange(false);
  };

  const rotate = (offset: number) => {
    const nextIndex =
      (activeIndex + offset + publishedRooms.length) % publishedRooms.length;
    void navigate({ to: publishedRooms[nextIndex].path });
  };

  return (
    <>
      <SpatialRing
        activeIndex={activeIndex}
        items={ringItems}
        onRotate={rotate}
        onSelect={selectRoom}
        overview={isOverview}
      />
      {isOverview ? (
        <>
          <button
            aria-label="Rotate to previous section"
            className="glass-control fixed top-1/2 left-[calc(50%-31rem)] z-[60] hidden -translate-y-1/2 px-3 py-2 lg:block"
            onClick={() => rotate(-1)}
            type="button"
          >
            ←
          </button>
          <button
            aria-label="Rotate to next section"
            className="glass-control fixed top-1/2 right-[calc(50%-31rem)] z-[60] hidden -translate-y-1/2 px-3 py-2 lg:block"
            onClick={() => rotate(1)}
            type="button"
          >
            →
          </button>
          <p className="pointer-events-none fixed inset-x-0 bottom-7 z-40 hidden text-center text-xs text-ink-muted md:block">
            Drag to rotate
          </p>
        </>
      ) : null}
    </>
  );
}
