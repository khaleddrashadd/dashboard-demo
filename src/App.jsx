import { Route, Routes } from 'react-router';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Contracts from './pages/Contracts';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          index
          element={<Home />}
        />
        <Route path="/reports">
          <Route
            path="/reports/contracts"
            element={<Contracts />}
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
