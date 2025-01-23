import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Contracts from "./pages/Contracts";
import Login from "./pages/Login";
import Statistics from "./pages/Statistics";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/reports">
          <Route path="/reports/contracts" element={<Contracts />} />
          <Route path="/reports/statistics" element={<Statistics />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
