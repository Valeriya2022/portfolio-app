import { Route, Routes } from 'react-router-dom';

import { rooms, RoomTemplate } from '../features/navigation';

const entryRoom = rooms[0];

export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RoomTemplate
            description="Full-Stack Developer"
            name={entryRoom.name}
            number={entryRoom.number}
            title={entryRoom.title}
          >
            <p>React · TypeScript · C# · .NET · AI-assisted development</p>
          </RoomTemplate>
        }
      />
    </Routes>
  );
}
export default App;
