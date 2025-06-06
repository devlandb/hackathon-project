import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;