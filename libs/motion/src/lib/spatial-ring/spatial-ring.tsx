import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import { CanvasTexture, Group, MathUtils, SRGBColorSpace } from 'three';

export type SpatialRingItem = {
  description: string;
  id: string;
  label: string;
};

export type SpatialRingProps = {
  activeIndex: number;
  items: readonly SpatialRingItem[];
  onSelect?: (item: SpatialRingItem, index: number) => void;
  overview: boolean;
};

type RingProps = SpatialRingProps & { reducedMotion: boolean };

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
    context.fillStyle = '#f5f5f4';
    context.font = '600 38px Inter, system-ui, sans-serif';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(item.label, canvas.width / 2, 88);
    context.fillStyle = '#c7c7c2';
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
      targetRotationRef.current,
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
              <meshStandardMaterial
                color={isActive ? '#6366f1' : '#3f3f46'}
                emissive={isActive ? '#312e81' : '#09090b'}
                emissiveIntensity={isActive ? 0.45 : 0.12}
                metalness={0.12}
                roughness={0.72}
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

  useEffect(() => {
    if (!window.matchMedia) return;

    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(query.matches);
    updatePreference();
    query.addEventListener('change', updatePreference);
    return () => query.removeEventListener('change', updatePreference);
  }, []);

  if (!supportsWebGL()) return null;

  return (
    <div
      aria-hidden={!props.overview}
      style={{
        background: props.overview
          ? 'color-mix(in srgb, var(--color-house-canvas) 92%, transparent)'
          : undefined,
        inset: 0,
        opacity: props.overview ? 1 : 0.08,
        pointerEvents: props.overview ? 'auto' : 'none',
        position: 'fixed',
        transition:
          'opacity var(--duration-room, 700ms) var(--ease-spatial, ease), background-color var(--duration-room, 700ms) var(--ease-spatial, ease)',
        zIndex: props.overview ? 30 : 0,
      }}
    >
      <Canvas camera={{ fov: 42, near: 0.1, far: 100, position: [0, 0, 8.5] }}>
        <ambientLight intensity={1.5} />
        <directionalLight intensity={2.4} position={[4, 6, 8]} />
        <Ring {...props} reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}
