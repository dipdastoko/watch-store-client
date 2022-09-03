import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children }) => {
    const { user, isLoading, isAdmin } = useAuth();
    const location = useLocation();

    if (isLoading || !isAdmin) {
        return <CircularProgress />
    }
    else {
        return user?.email && isAdmin ? children : <Navigate replace state={{ from: location }} to='/login' />
    }
};

export default AdminRoute;