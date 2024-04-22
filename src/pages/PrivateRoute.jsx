import { Navigate, Outlet } from "react-router-dom";
import Layout from "../component/custom/Layout";

export const PrivateRoute = ({val}) => {
    
  return val ?<Layout> <Outlet /></Layout> : <Navigate to="/" />;
};
