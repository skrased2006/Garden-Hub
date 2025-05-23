import React, { useContext } from 'react';
import { AuthContext } from '../Authtication/AuthContext';
import { Navigate } from 'react-router'; 

const PrivetRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" replace />;
};

export default PrivetRoute;