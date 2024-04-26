import { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { Offcanvas } from "../../component/custom/Offcanvas";


const Layout = () => {
const [activeSidebar,setActiveSidebar]=useState(localStorage.getItem("activeSidebar"))
useEffect(()=>{

  localStorage.setItem("activeSidebar",activeSidebar)
},[activeSidebar])
const title = activeSidebar ? activeSidebar.replace("/", "") : "";
  return (
    <>


 <div className="d-block d-sm block d-md-none d-lg-none">
<Offcanvas setActiveSidebar={setActiveSidebar} activeSidebar={activeSidebar}/>
</div> 

    <div className="overflow-hidden">
        <div className="vh-100 ">
        <div className="row ">
        <div className="d-none d-sm-none d-md-block d-lg-block col-2 bg-white  rounded-end-5">
          <Sidebar  setActiveSidebar={setActiveSidebar} activeSidebar={activeSidebar}/>
        </div>

        <div className="col-sm-12 col-md-10 col-lg-10 p-4 d-flex flex-column vh-100">
          <Header title={title}/>
          <div className="flex-grow-1 overflow-auto">
          <Outlet />
          </div>
    
         
         
        </div>
      </div>
        </div>
    </div>
    
    </>
  );
};
export default Layout;
