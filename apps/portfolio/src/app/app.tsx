import { LanguageProvider } from '../features/language';
import { Outlet } from '@tanstack/react-router';
import { Analytics } from '@vercel/analytics/react';

import { ContactFooter } from '../features/contact';
import { RoomNavigation } from '../features/navigation';

export function App() {
  return (
    <LanguageProvider>
      {/* Spatial visualization is intentionally disabled for the first release. */}
      <RoomNavigation />
      <Outlet />
      <ContactFooter />
      <Analytics />
    </LanguageProvider>
  );
}
export default App;
