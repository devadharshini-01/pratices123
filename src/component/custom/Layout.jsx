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
        <div className="d-none d-sm-none d-md-block d-lg-block col-2 bg-white vh-100 rounded-end-5">
          <Sidebar />
        </div>

        <div className="col-sm-12 col-md-10 col-lg-10 p-4 vh-100 d-flex flex-column ">
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
