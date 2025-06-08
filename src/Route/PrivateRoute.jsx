import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const PrivateRoutes = ({children}) => {
    const {user,loading} = use(AuthContext)
    const location = useLocation()
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }

    if(!user){
        return <Navigate state={location?.pathname} to="/login"></Navigate>
    }
    return children;
};
export default PrivateRoutes;