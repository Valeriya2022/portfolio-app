import { Outlet } from '@tanstack/react-router';
import { Analytics } from '@vercel/analytics/react';

import { RoomNavigation } from '../features/navigation';

export function App() {
  return (
    <>
      {/* Spatial visualization is intentionally disabled for the first release. */}
      <RoomNavigation />
      <Outlet />
      <Analytics />
    </>
  );
}
export default App;
