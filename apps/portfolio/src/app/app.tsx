import { Outlet } from '@tanstack/react-router';

import { RoomNavigation } from '../features/navigation';

export function App() {
  return (
    <>
      {/* Spatial visualization is intentionally disabled for the first release. */}
      <RoomNavigation />
      <Outlet />
    </>
  );
}
export default App;
