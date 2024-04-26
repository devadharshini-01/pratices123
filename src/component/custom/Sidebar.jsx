import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  DistributorData,
  RetailerData,
  AdminData,
} from "../../Constant/index";
import logo from "../../images/logo.webp"
const Sidebar = ({activeSidebar,setActiveSidebar}) => {
  const [currentSidebarData, setCurrentSidebarData] = useState([]);
  const userType = localStorage.getItem("userType");
  useEffect(() => {
    if (userType === "Distributor") {
      setCurrentSidebarData(DistributorData);
    } else if (userType === "Retailer") {
    setCurrentSidebarData(RetailerData);
    }else if(userType==="Admin"){
      setCurrentSidebarData(AdminData)
    }

const storeactive=localStorage.getItem("activeSidebar")
if(storeactive){
  setActiveSidebar(storeactive)
}

  }, []);

  const handleSidebar=(path)=>{
    setActiveSidebar(path)
    localStorage.setItem("activeSidebar",path)
  }

  return (
    <>
      <div className="list-group mt-4  ">
   <img className="w-75  " src={logo}></img>
        {Array.isArray(currentSidebarData) &&
          currentSidebarData?.map((value) => {
            return (
              <Link to={value.path}>
                {" "}
                <p
                  className={`${
                    activeSidebar === value.path
                      ? " p-2 rounded-3 bg-color  text-white"
                      : "text-black"
                  } p-2 hover list-group  fontsize `}
                  onClick={()=>handleSidebar(value.path)}
                >
                  {value.name}
                </p>
              </Link>
            );
          })}
      </div>
    </>
  );
};
export default Sidebar;
