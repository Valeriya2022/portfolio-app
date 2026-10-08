import { Outlet } from '@tanstack/react-router';
import { Analytics } from '@vercel/analytics/react';

import { ContactFooter } from '../features/contact';
import { RoomNavigation } from '../features/navigation';

export function App() {
  return (
    <>
      {/* Spatial visualization is intentionally disabled for the first release. */}
      <RoomNavigation />
      <Outlet />
      <ContactFooter />
      <Analytics />
    </>
  );
}
export default App;
