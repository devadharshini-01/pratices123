import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = ({val}) => {
    
  return val ? <Outlet /> : <Navigate to="/" />;
};
