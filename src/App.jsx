import { Route, Routes } from 'react-router';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Contracts from './pages/Contracts';
import Login from './pages/Login';
import Statistics from './pages/Statistics';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
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
            <Route
              path="/reports/statistics"
              element={<Statistics />}
            />
            <Route
              path="/reports/installments"
              element={<Installments />}
            />
          </Route>
        </Route>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/test"
          element={<Test />}
        />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
