import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn, children, redirectTo = "/" }) => {
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};


export default ProtectedRoute;
