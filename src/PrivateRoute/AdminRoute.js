import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';

const AdminRoute = ({ children }) => {
    const {user,admin, isLoading} = useAuth();
    const location = useLocation();
    if(isLoading){
        return <CircularProgress></CircularProgress>
    }
    
    if((user.email || user.displayName) && admin){
      return children
    }
    return <Navigate to="/" state={{ from: location }} />;
};

export default AdminRoute;