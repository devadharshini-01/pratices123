import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    console.log(window.location.pathname,"window.location.pathname");
  return (
    <>
    <div className="overflow-hidden">
        <div className="vh-100">
        <div className="row">
        <div className="col-2 bg-white vh-100 rounded-end-5">
          <Sidebar />
        </div>

        <div className="col-10">
          <Header />
          <Outlet />
        </div>
      </div>
        </div>
    </div>
    
    </>
  );
};
export default Layout;
