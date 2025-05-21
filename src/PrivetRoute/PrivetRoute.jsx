import React, { useContext } from 'react';
import { AuthContext } from '../Authtication/AuthContext';
import { Navigate } from 'react-router';

const PrivetRoute = ({children}) => {
    const {user}=useContext(AuthContext);
    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>

};

export default PrivetRoute;