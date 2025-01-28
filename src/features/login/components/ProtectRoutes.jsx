import { Navigate, Outlet, useLocation } from 'react-router';

const ProtectRoutes = () => {
  const location = useLocation();
  const token = localStorage.getItem('token');
  if (!token && location.pathname !== '/login') {
    return <Navigate to="/login" replace />;
  }
  if (token && location.pathname === '/login') {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};
export default ProtectRoutes;
