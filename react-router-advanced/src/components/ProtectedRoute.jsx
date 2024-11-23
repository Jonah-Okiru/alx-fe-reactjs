import React, { Children } from "react";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({useAuth, children}) =>{
    return useAuth ? children : <Navigate to="/" />;

};
export default ProtectedRoute;