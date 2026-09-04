import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <main className="grid min-h-screen place-items-center bg-slate-950 text-slate-100">
            <h1 className="text-4xl font-semibold">Portfolio</h1>
          </main>
        }
      />
    </Routes>
  );
}
export default App;
