import {
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

export type SpatialRingItem = {
  description: string;
  id: string;
  label: string;
};

export type SpatialRingProps = {
  activeIndex: number;
  items: readonly SpatialRingItem[];
  onRotate?: (offset: number) => void;
  onSelect?: (item: SpatialRingItem, index: number) => void;
  overview: boolean;
};

export function getShortestCircularDelta(
  previousIndex: number,
  activeIndex: number,
  itemCount: number,
) {
  const directDelta = activeIndex - previousIndex;
  const halfRing = Math.floor(itemCount / 2);
  return ((directDelta + halfRing + itemCount) % itemCount) - halfRing;
}

export function getDragRoomOffset(distance: number, itemCount: number) {
  if (Math.abs(distance) < 48) return 0;

  const degreesPerRoom = 360 / itemCount;
  const crossedRooms = Math.max(
    1,
    Math.round((Math.abs(distance) * 0.2) / degreesPerRoom),
  );
  return distance > 0 ? -crossedRooms : crossedRooms;
}

export function SpatialRing({
  activeIndex,
  items,
  onRotate,
  onSelect,
  overview,
}: SpatialRingProps) {
  const [dragDistance, setDragDistance] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isRoomHovered, setIsRoomHovered] = useState(false);
  const [settledRotation, setSettledRotation] = useState(
    () => -activeIndex * (360 / items.length),
  );
  const previousIndexRef = useRef(activeIndex);
  const dragStartRef = useRef<number | null>(null);
  const didDragRef = useRef(false);
  const step = 360 / items.length;

  useEffect(() => {
    const delta = getShortestCircularDelta(
      previousIndexRef.current,
      activeIndex,
      items.length,
    );
    setSettledRotation((rotation) => rotation - delta * step);
    previousIndexRef.current = activeIndex;
  }, [activeIndex, items.length, step]);

  const startDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    dragStartRef.current = event.clientX;
    didDragRef.current = false;
    setIsDragging(true);
  };

  const updateDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStartRef.current === null) return;
    const distance = event.clientX - dragStartRef.current;
    didDragRef.current = Math.abs(distance) > 8;
    setDragDistance(distance);
  };

  const finishDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStartRef.current === null) return;
    const distance = event.clientX - dragStartRef.current;
    dragStartRef.current = null;
    setIsDragging(false);
    setDragDistance(0);
    const roomOffset = getDragRoomOffset(distance, items.length);
    if (roomOffset !== 0) onRotate?.(roomOffset);
  };

  const suppressDragClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (!didDragRef.current) return;
    event.preventDefault();
    event.stopPropagation();
    didDragRef.current = false;
  };

  if (!overview) return null;

  return (
    <div
      aria-label="Room visualization"
      onClickCapture={suppressDragClick}
      onPointerDown={startDrag}
      onPointerMove={updateDrag}
      onPointerUp={finishDrag}
      role="region"
      style={{
        backdropFilter: 'blur(28px) saturate(135%)',
        background:
          'color-mix(in srgb, var(--color-house-canvas) 68%, transparent)',
        cursor: isRoomHovered ? 'pointer' : isDragging ? 'grabbing' : 'grab',
        inset: 0,
        position: 'fixed',
        touchAction: 'none',
        WebkitBackdropFilter: 'blur(28px) saturate(135%)',
        zIndex: 30,
      }}
    >
      <div
        aria-label="Portfolio rooms"
        role="group"
        style={{
          height: '100%',
          perspective: '1100px',
          perspectiveOrigin: '50% 50%',
          position: 'relative',
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          style={{
            height: 160,
            left: '50%',
            position: 'absolute',
            top: '50%',
            transform: `translate(-50%, -50%) rotateY(${settledRotation + dragDistance * 0.2}deg)`,
            transformStyle: 'preserve-3d',
            transition: isDragging
              ? 'none'
              : 'transform var(--duration-room, 700ms) var(--ease-spatial, ease)',
            width: 240,
          }}
        >
          {items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                aria-label={`Enter ${item.label} room`}
                aria-current={isActive ? 'true' : undefined}
                className="glass-surface"
                key={item.id}
                onClick={() => onSelect?.(item, index)}
                onMouseEnter={() => setIsRoomHovered(true)}
                onMouseLeave={() => setIsRoomHovered(false)}
                style={{
                  alignItems: 'center',
                  backfaceVisibility: 'hidden',
                  borderColor: isActive
                    ? 'var(--color-line-luminous)'
                    : 'var(--glass-border)',
                  color: 'var(--color-ink-primary)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  height: 160,
                  justifyContent: 'center',
                  left: 0,
                  position: 'absolute',
                  textAlign: 'center',
                  top: 0,
                  transform: `rotateY(${index * step}deg) translateZ(340px)`,
                  width: 240,
                }}
                type="button"
              >
                <strong style={{ fontSize: 16, fontWeight: 600 }}>
                  {item.label}
                </strong>
                <span
                  style={{
                    color: 'var(--color-ink-secondary)',
                    fontSize: 12,
                  }}
                >
                  {item.description}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
