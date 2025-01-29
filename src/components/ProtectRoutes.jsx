import { setNavigateRef } from '@/lib/axios';
import { useEffect } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router';

const ProtectRoutes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setNavigateRef(navigate);
  }, [navigate]);
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
