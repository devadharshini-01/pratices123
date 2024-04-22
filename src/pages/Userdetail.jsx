import Sidebar from "../component/custom/Sidebar";
import Header from "../component/custom/Header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../component/custom/Button";
import { InlineIcon } from "@iconify/react";
import { Detailpage } from "./Detailpage";
import { Order } from "./Order";
import { Platformpage } from "./Platformpage";
import { Retailerspage } from "./Retailerspage";
import { Settings } from "./Settings";
import Layout from "../component/custom/Layout";

const Userdetail = () => {
  const location = useLocation();
  const initialVal = location?.state?.DD;
  const returnPath = localStorage.getItem("ReturnPath");

  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);
  const [openTab, setOpenTab] = useState("Detailpage");
  const returnPathWithoutSlash = returnPath
    ? returnPath.replace(/\//g, "")
    : "";
  console.log(openTab, "tab");
  const tabs = [
    {
      name: "Details",
      content: (
        <Detailpage initialVal={initialVal} edit={edit} setEdit={setEdit} />
      ),
    },
    { name: "Orders", content: <Order /> },
    {
      name: "Platform Fees",
      content: <Platformpage />,
    },
    { name: "Retailers", content: <Retailerspage /> },
    { name: "Settings", content: <Settings /> },
  ];

  return (
    <>
      <div className="overflow-hidden">
        <div className="vh-100">
          <div className="row">
         
            <div className=" col-sm-12 col-md-10 col-lg-10">
              <div className="d-flex vh-100 flex-column overflow-auto">
                {/* <Header title={returnPathWithoutSlash} /> */}
                <div className="flex-grow-1 overflow-x-hidden pb-80px">
                  <div className="row">
                    <div className="col-9">
                      <Button
                        type="button"
                        buttonName="Back"
                        color="white"
                        onClick={() => navigate(returnPath)}
                      />
                    </div>

                    <div className="col-3">
                      {openTab === "Details" && (
                        <Button
                          type="button"
                          onClick={() => setEdit(!edit)}
                          color="white"
                          buttonName={edit ? "cancel" : "edit"}
                          Icon={
                            <InlineIcon
                              icon="mage:edit"
                              width="15"
                              height="15"
                            />
                          }
                        />
                      )}
                    </div>
                  </div>
                  <div className="card mt-2 border-0 ">
                    <ul
                      className="nav nav-pills mb-3 d-flex justify-content-around  "
                      id="pills-tab"
                      role="tablist"
                    >
                      {tabs.map((item) => (
                        <li className="nav-item" role="presentation">
                          <Link
                            to={item.link}
                            onClick={() => setOpenTab(item.name)}
                          >
                            <b className="red-color">{item.name}</b>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {tabs.map((val) => (
                    <div
                      className={`card mt-2 border-0 ${
                        val.name === openTab ? "d-block" : "d-none"
                      }`}
                    >
                      <div id="pills-tabContent">
                        <div key={val.name}>{val.content}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Userdetail;
