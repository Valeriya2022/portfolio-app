import { Outlet } from '@tanstack/react-router';

import { RoomNavigation } from '../features/navigation';

export function App() {
  return (
    <>
      <RoomNavigation />
      <Outlet />
    </>
  );
}
export default App;
