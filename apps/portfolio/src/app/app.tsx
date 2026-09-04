import { Outlet } from '@tanstack/react-router';

import { RoomControls, RoomNavigation } from '../features/navigation';

export function App() {
  return (
    <>
      <RoomNavigation />
      <Outlet />
      <RoomControls />
    </>
  );
}
export default App;
