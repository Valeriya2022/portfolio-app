import { Canvas, useFrame } from '@react-three/fiber';
import {
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { CanvasTexture, Group, MathUtils, SRGBColorSpace } from 'three';

export type SpatialRingItem = {
  description: string;
  id: string;
  label: string;
};

export type SpatialRingProps = {
  activeIndex: number;
  items: readonly SpatialRingItem[];
  onRotate?: (direction: -1 | 1) => void;
  onSelect?: (item: SpatialRingItem, index: number) => void;
  overview: boolean;
};

type RingProps = SpatialRingProps & {
  dragRotation: number;
  reducedMotion: boolean;
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

function RoomLabel({ item }: { item: SpatialRingItem }) {
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const context = canvas.getContext('2d');
    if (!context) return null;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#ffffff';
    context.font = '600 38px Inter, system-ui, sans-serif';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(item.label, canvas.width / 2, 88);
    context.fillStyle = '#e4e4e7';
    context.font = '400 23px Inter, system-ui, sans-serif';
    context.fillText(item.description, canvas.width / 2, 158, 440);

    const labelTexture = new CanvasTexture(canvas);
    labelTexture.colorSpace = SRGBColorSpace;
    return labelTexture;
  }, [item]);

  useEffect(() => () => texture?.dispose(), [texture]);

  if (!texture) return null;

  return (
    <mesh position={[0, 0, 0.08]}>
      <planeGeometry args={[2.8, 1.4]} />
      <meshBasicMaterial map={texture} toneMapped={false} transparent />
    </mesh>
  );
}

function Ring({
  activeIndex,
  dragRotation,
  items,
  onSelect,
  overview,
  reducedMotion,
}: RingProps) {
  const groupRef = useRef<Group>(null);
  const step = (Math.PI * 2) / items.length;
  const previousIndexRef = useRef(activeIndex);
  const targetRotationRef = useRef(-activeIndex * step);

  useEffect(() => {
    const previousIndex = previousIndexRef.current;
    const wrappedDelta = getShortestCircularDelta(
      previousIndex,
      activeIndex,
      items.length,
    );

    targetRotationRef.current -= wrappedDelta * step;
    previousIndexRef.current = activeIndex;
  }, [activeIndex, items.length, step]);

  useFrame(({ camera }, delta) => {
    const group = groupRef.current;
    if (!group) return;

    const amount = reducedMotion ? 1 : 1 - Math.exp(-delta * 4.5);
    group.rotation.y = MathUtils.lerp(
      group.rotation.y,
      targetRotationRef.current + dragRotation,
      amount,
    );
    camera.position.z = MathUtils.lerp(
      camera.position.z,
      overview ? 18 : 8.5,
      amount,
    );
  });

  return (
    <group ref={groupRef}>
      {items.map((item, index) => {
        const angle = index * step;
        const isActive = index === activeIndex;

        return (
          <group
            key={item.id}
            position={[Math.sin(angle) * 5.2, 0, Math.cos(angle) * 5.2]}
            rotation={[0, angle, 0]}
          >
            <mesh onClick={() => onSelect?.(item, index)}>
              <boxGeometry args={[3.2, 2.2, 0.12]} />
              <meshPhysicalMaterial
                clearcoat={0.9}
                clearcoatRoughness={0.18}
                color={isActive ? '#4338ca' : '#1c1c1e'}
                depthWrite={false}
                emissive={isActive ? '#312e81' : '#18181b'}
                emissiveIntensity={isActive ? 0.24 : 0.06}
                metalness={0.08}
                opacity={isActive ? 0.82 : 0.7}
                roughness={0.16}
                transparent
              />
            </mesh>
            {overview ? <RoomLabel item={item} /> : null}
          </group>
        );
      })}
    </group>
  );
}

function supportsWebGL() {
  return typeof window !== 'undefined' && 'WebGLRenderingContext' in window;
}

export function SpatialRing(props: SpatialRingProps) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [dragRotation, setDragRotation] = useState(0);
  const dragStartRef = useRef<number | null>(null);
  const didDragRef = useRef(false);

  useEffect(() => {
    if (!window.matchMedia) return;

    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(query.matches);
    updatePreference();
    query.addEventListener('change', updatePreference);
    return () => query.removeEventListener('change', updatePreference);
  }, []);

  if (!supportsWebGL()) return null;

  const startDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!props.overview) return;
    dragStartRef.current = event.clientX;
    didDragRef.current = false;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const updateDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStartRef.current === null) return;
    const distance = event.clientX - dragStartRef.current;
    didDragRef.current = Math.abs(distance) > 8;
    setDragRotation(distance * 0.0035);
  };

  const finishDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStartRef.current === null) return;
    const distance = event.clientX - dragStartRef.current;
    dragStartRef.current = null;
    setDragRotation(0);
    if (Math.abs(distance) >= 48) props.onRotate?.(distance > 0 ? -1 : 1);
  };

  const suppressDragClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (!didDragRef.current) return;
    event.preventDefault();
    event.stopPropagation();
    didDragRef.current = false;
  };

  if (!props.overview) return null;

  return (
    <div
      aria-hidden={!props.overview}
      onClickCapture={suppressDragClick}
      onPointerDown={startDrag}
      onPointerMove={updateDrag}
      onPointerUp={finishDrag}
      style={{
        backdropFilter: 'blur(28px) saturate(135%)',
        background:
          'color-mix(in srgb, var(--color-house-canvas) 68%, transparent)',
        inset: 0,
        opacity: 1,
        pointerEvents: 'auto',
        position: 'fixed',
        touchAction: 'none',
        transition:
          'opacity var(--duration-room, 700ms) var(--ease-spatial, ease), background-color var(--duration-room, 700ms) var(--ease-spatial, ease)',
        WebkitBackdropFilter: 'blur(28px) saturate(135%)',
        zIndex: 30,
      }}
    >
      <Canvas camera={{ fov: 42, near: 0.1, far: 100, position: [0, 0, 8.5] }}>
        <ambientLight intensity={1.5} />
        <directionalLight intensity={2.4} position={[4, 6, 8]} />
        <Ring
          {...props}
          dragRotation={dragRotation}
          reducedMotion={reducedMotion}
        />
      </Canvas>
    </div>
  );
}
