import { Route, Routes } from 'react-router';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Contracts from './pages/Contracts';
import Login from './pages/Login';
import Statistics from './pages/Statistics';
import Installments from './pages/Installments';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
