import { Route, Routes } from 'react-router-dom';

import { RoomTemplate } from '../features/navigation';

export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RoomTemplate
            description="Full-Stack Developer"
            name="Spawn"
            number={1}
            title="Portfolio"
          >
            <p>React · TypeScript · C# · .NET · AI-assisted development</p>
          </RoomTemplate>
        }
      />
    </Routes>
  );
}
export default App;
