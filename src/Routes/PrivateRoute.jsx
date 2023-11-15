/* eslint-disable react/prop-types */
// import { useContext } from "react";
// import { AuthContext } from "../Provieder/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../useAuth/useAuth";

const PrivateRoute = ({children}) => {
    // const {user, loading} = useContext(AuthContext);
    const {user, loading} = useAuth();
    const location = useLocation();
    // console.log(location.pathname);



if(loading){
    return <span className="loading loading-bars loading-lg"></span>
}
if(user?.email){
    return children;
}
    return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

export default PrivateRoute;