import { Outlet } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';

import { RoomControls, RoomNavigation } from '../features/navigation';

const RoomUniverse = lazy(() =>
  import('../features/navigation/components/room-universe').then((module) => ({
    default: module.RoomUniverse,
  })),
);

export function App() {
  return (
    <>
      <Suspense fallback={null}>
        <RoomUniverse />
      </Suspense>
      <RoomNavigation />
      <Outlet />
      <RoomControls />
    </>
  );
}
export default App;
