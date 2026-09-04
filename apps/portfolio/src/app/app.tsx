import { Route, Routes } from 'react-router-dom';

import { AboutRoom } from '../features/about';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutRoom />} />
    </Routes>
  );
}
export default App;
