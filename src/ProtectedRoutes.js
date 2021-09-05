import React from 'react';
import { Redirect, Route } from "react-router-dom";

const ProtectedRoutes = ({ component: Component, ...restOfProps }) =>  {

    const isAuthenticated = localStorage.getItem("isAuthenticated");
    
    // console.log(isAuthenticated);
    
    return (
        <>
             
            <Route 
                 {...restOfProps}
                render={(props) =>
                    isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
                    
                }
            /> 
        </>
    )
}

export default ProtectedRoutes;
