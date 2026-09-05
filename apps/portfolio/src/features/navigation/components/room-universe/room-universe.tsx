import { SpatialRing, type SpatialRingItem } from '@learning-app/motion';
import { useNavigate, useRouterState } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';

import { rooms } from '../../model/rooms';

const ringItems = rooms.map((room) => ({
  description: room.summary,
  id: room.id,
  label: room.navLabel,
}));

export function RoomUniverse() {
  const [isOverview, setIsOverview] = useState(false);
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
      if (event.key === 'Escape') setIsOverview(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [isOverview]);

  useEffect(
    () => () => {
      if (rotationTimerRef.current) clearTimeout(rotationTimerRef.current);
    },
    [],
  );

  const selectRoom = (item: SpatialRingItem) => {
    if (rotationLockRef.current) return;
    const room = rooms.find((candidate) => candidate.id === item.id);
    if (room) void navigate({ to: room.path });
    setIsOverview(false);
  };

  const rotate = (offset: -1 | 1) => {
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
        onSelect={selectRoom}
        overview={isOverview}
      />
      <button
        aria-pressed={isOverview}
        className="fixed right-room-inline bottom-5 z-[60] rounded-control border border-line-subtle bg-house-canvas/90 px-3 py-2 text-xs text-ink-secondary backdrop-blur-md transition-colors hover:text-ink-primary md:bottom-6"
        onClick={() => setIsOverview((overview) => !overview)}
        type="button"
      >
        {isOverview ? 'Enter room' : 'View rooms'}
      </button>
      {isOverview ? (
        <>
          <button
            aria-label="Rotate to previous room"
            className="fixed top-1/2 left-room-inline z-[60] -translate-y-1/2 rounded-control border border-line-subtle bg-house-canvas/80 px-3 py-2 text-ink-secondary backdrop-blur-md disabled:opacity-30"
            disabled={isRotating}
            onClick={() => rotate(-1)}
            type="button"
          >
            ←
          </button>
          <button
            aria-label="Rotate to next room"
            className="fixed top-1/2 right-room-inline z-[60] -translate-y-1/2 rounded-control border border-line-subtle bg-house-canvas/80 px-3 py-2 text-ink-secondary backdrop-blur-md disabled:opacity-30"
            disabled={isRotating}
            onClick={() => rotate(1)}
            type="button"
          >
            →
          </button>
          <p className="pointer-events-none fixed inset-x-0 bottom-7 z-40 hidden text-center text-xs text-ink-muted md:block">
            Select a room or return to the current one
          </p>
        </>
      ) : null}
    </>
  );
}
