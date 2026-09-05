import { SpatialRing, type SpatialRingItem } from '@learning-app/motion';
import { useNavigate, useRouterState } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';

import { rooms } from '../../model/rooms';

const ringItems = rooms.map((room) => ({
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
  const [isRotating, setIsRotating] = useState(false);
  const rotationLockRef = useRef(false);
  const rotationTimerRef = useRef<number | undefined>(undefined);
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
      if (event.key === 'Escape') onOverviewChange(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [isOverview, onOverviewChange]);

  useEffect(
    () => () => {
      if (rotationTimerRef.current) clearTimeout(rotationTimerRef.current);
    },
    [],
  );

  const selectRoom = (item: SpatialRingItem) => {
    const room = rooms.find((candidate) => candidate.id === item.id);
    if (room) void navigate({ to: room.path });
    onOverviewChange(false);
  };

  const rotate = (offset: number) => {
    if (rotationLockRef.current) return;

    rotationLockRef.current = true;
    setIsRotating(true);
    const nextIndex = (activeIndex + offset + rooms.length) % rooms.length;
    void navigate({ to: rooms[nextIndex].path });

    rotationTimerRef.current = window.setTimeout(() => {
      rotationLockRef.current = false;
      setIsRotating(false);
    }, 800);
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
            aria-label="Rotate to previous room"
            className="glass-control fixed top-1/2 left-4 z-[60] -translate-y-1/2 px-3 py-2 disabled:opacity-30 md:left-[calc(50%-26rem)]"
            disabled={isRotating}
            onClick={() => rotate(-1)}
            type="button"
          >
            ←
          </button>
          <button
            aria-label="Rotate to next room"
            className="glass-control fixed top-1/2 right-4 z-[60] -translate-y-1/2 px-3 py-2 disabled:opacity-30 md:right-[calc(50%-26rem)]"
            disabled={isRotating}
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
