import { Outlet } from '@tanstack/react-router';
import { lazy, Suspense, useState } from 'react';

import { RoomNavigation } from '../features/navigation';

const RoomUniverse = lazy(() =>
  import('../features/navigation/components/room-universe').then((module) => ({
    default: module.RoomUniverse,
  })),
);

export function App() {
  const [isVisualizing, setIsVisualizing] = useState(false);

  return (
    <>
      <Suspense fallback={null}>
        <RoomUniverse
          isOverview={isVisualizing}
          onOverviewChange={setIsVisualizing}
        />
      </Suspense>
      <RoomNavigation
        isVisualizing={isVisualizing}
        onVisualize={() => setIsVisualizing((visualizing) => !visualizing)}
      />
      <Outlet />
    </>
  );
}
export default App;
