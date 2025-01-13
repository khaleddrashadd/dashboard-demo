import { Route, Routes } from 'react-router';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          index
          element={<Home />}
        />
      </Route>
    </Routes>
  );
}

export default App;
