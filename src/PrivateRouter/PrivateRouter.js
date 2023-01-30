import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userAuth } from '../Components/Contexts/AuthContext';

const PrivateRouter = ({children}) => {
    const location = useLocation();
    const { user, loader} = useContext(userAuth);
    if(loader){
        return <h1>Loading...</h1>
    }
    if(user && user?.email){
        return children
    }
    return <Navigate to={"/login" } state={{ from: location }} replace></Navigate>;
};

export default PrivateRouter;