import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import { CanvasTexture, Group, MathUtils, SRGBColorSpace } from 'three';

export type SpatialRingItem = {
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

function RoomLabel({ label }: { label: string }) {
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 128;
    const context = canvas.getContext('2d');
    if (!context) return null;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#f5f5f4';
    context.font = '500 38px Inter, system-ui, sans-serif';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(label, canvas.width / 2, canvas.height / 2);

    const labelTexture = new CanvasTexture(canvas);
    labelTexture.colorSpace = SRGBColorSpace;
    return labelTexture;
  }, [label]);

  useEffect(() => () => texture?.dispose(), [texture]);

  if (!texture) return null;

  return (
    <mesh position={[0, 0, 0.08]}>
      <planeGeometry args={[2.6, 0.65]} />
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
  const targetRotation = -activeIndex * step;

  useFrame(({ camera }, delta) => {
    const group = groupRef.current;
    if (!group) return;

    const amount = reducedMotion ? 1 : 1 - Math.exp(-delta * 4.5);
    group.rotation.y = MathUtils.lerp(group.rotation.y, targetRotation, amount);
    camera.position.z = MathUtils.lerp(
      camera.position.z,
      overview ? 18 : 9.2,
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
            {overview ? <RoomLabel label={item.label} /> : null}
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
      <Canvas camera={{ fov: 42, near: 0.1, far: 100, position: [0, 0, 9.2] }}>
        <ambientLight intensity={1.5} />
        <directionalLight intensity={2.4} position={[4, 6, 8]} />
        <Ring {...props} reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}
