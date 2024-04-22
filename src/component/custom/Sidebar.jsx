import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  DistributorData,
  RetailerData,
  AdminData,
} from "../../Constant/index";

const Sidebar = () => {
  const [currentSidebarData, setCurrentSidebarData] = useState([]);
  const [activeSidebar, setActiveSidebar] = useState("/Dashboard");
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

  }, [userType]);

  const handleSidebar=(path)=>{
    setActiveSidebar(path)
    localStorage.setItem("activeSidebar",path)
  }

  return (
    <>
      <div className="list-group  ">
        <b className="red-color p-4">Vinobridge</b>
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
