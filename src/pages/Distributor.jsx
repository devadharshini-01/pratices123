import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Header from "../component/custom/Header";
import Sidebar from "../component/custom/Sidebar";
import Table from "../component/custom/Table";
import { UsersListApiAction } from "../Redux/Action/UsersListApiAction";
import "../App.css";
import Button from "../component/custom/Button";
import { Icon, InlineIcon } from "@iconify/react";
import ReactPaginate from "react-paginate";
import moment from "moment";
import Input from "../component/custom/Input";
import { DistributorHeaderName, RetailerHeaderName } from "../Constant";
import Layout from "../component/custom/Layout";

const Distributor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selector = useSelector((state) => state.userlist.userlistapi);
  const state = localStorage.getItem("userType");
  const [paginate, setPaginate] = useState();
  const [userDetail, setuserDetail] = useState({
    userType: "RETAILER",
    sortBy: "joinedDate:DESC",
    page: 1,
    size: 10,
  });

  useEffect(() => {
    setuserDetail({
      ...userDetail,
      userType:
        window.location.pathname === "/Distributor"
          ? "DISTRIBUTOR"
          : "RETAILER",
    });
  }, [window.location.pathname]);

  useEffect(() => {
    dispatch(UsersListApiAction(userDetail));
  }, [userDetail]);

  useEffect(() => {
    if (!selector?.loading) {
      if (selector?.data?.length === 0 && selector?.error?.error) {
        toast.error(selector?.error?.error);
      }
    }
  }, [selector?.error]);
  const handleSort = (item) => {
    setuserDetail({ ...userDetail, sortBy: item });
  };
  const page = Math.ceil(selector?.data?.data?.totalCount / userDetail.size);
  const handlePageClick = (event) => {
    setuserDetail({ ...userDetail, page: event.selected + 1 });
    setPaginate(event.selected + 1);
  };
  const handleClick = (DD) => {
    localStorage.setItem("ReturnPath", window.location.pathname);

    if (state === "Admin") {
      navigate(`/userdetail/${DD.userId}`);
    
    } else {
      navigate(`/Datapage/${DD.userId}`);
    }
  };

  return (
    <>
 
        <div className="d-flex vh-100 flex-column overflow-auto">
          <div className="flex-grow-1 overflow-x-hidden pb-80px">
            <div className="row d-flex justify-content-between">
              <div className="col-sm-12 col-md-3 col-lg-3 ">
                <Input
                  placeholder="search"
             
                  onChange={(event) => {
                    if (event.target.value !== "") {
                      setuserDetail({
                        ...userDetail,
                        searchTerm: event.target.value,
                        page: 1,
                      });
                    } else {
                      const { searchTerm, ...value } = userDetail;

                      setuserDetail(value);

                      setuserDetail({ ...userDetail, page: paginate });
                    }
                  }}
                />
              </div>

              <div className=" col-md-2 col-lg-2 p-2 d-flex gap-2 ">
                <Button
                  buttonName="Add"
                  color="white"
                  className="pe-none"
                  red="danger"
                  Icon={<InlineIcon icon="uil:plus" width="15" height="15" />}
                />
                <Button
                  buttonName="Invite"
                  color="white"
                  red="danger"
                  className="pe-none"
                  Icon={
                    <InlineIcon
                      icon="mdi:account-multiple-plus"
                      width="15"
                      height="15"
                    />
                  }
                />
              </div>
            </div>

            <div className="table-container  table-responsive">
              <Table
                headersName={
                  userDetail.userType === "RETAILER"
                    ? RetailerHeaderName
                    : DistributorHeaderName
                }
                data={
                  selector?.data && selector?.data?.data?.items
                    ? selector?.data?.data?.items.map((item) => ({
                        ...item,

                        joinedDate: moment(item.joinedDate).format(
                          "YYYY-MM-DD LT"
                        ),
                      }))
                    : []
                }
                isLoading={selector?.loading}
                handleSort={handleSort}
                handleClick={handleClick}
                Icon={
                  <InlineIcon
                    icon="pajamas:remove"
                    width="15"
                    height="15"
                    style={{ color: "black" }}
                  />
                }
              />
            </div>

            <div className="card border-0">
              <div className=" justify-content-between">
                <div className=" col-sm-12 d-flex  p-2">
                  <label>
                    Showing 1 to {userDetail.size} of{" "}
                    {selector?.data?.data?.totalCount} entries
                  </label>

                  <select
                    onChange={(event) =>
                      setuserDetail({
                        ...userDetail,
                        size: event.target.value,
                      })
                    }
                    className="form-select  w-25"
                    aria-label="Default select example"
                  >
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                  </select>
                </div>
                <div className="p-2 ">
                  <ReactPaginate
                    previousLabel={<><Icon icon="radix-icons:chevron-left" width="10" height="10"  style={{color: "black"}} /> </>}
                    nextLabel={<><Icon icon="radix-icons:chevron-right" width="10" height="10"  style={{color: "black"}} /></>}
                    pageCount={page}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    
                    containerClassName={"pagination "}
                    pageClassName={"page-item px-0"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item px-0"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item px-0"}
                    nextLinkClassName={"page-link"}
                    activeClassName={"active"}
                    breakLabel="..."

                  />

                </div>
              </div>
            </div>
          </div>
        </div>

      <ToastContainer />
    </>
  );
};
export default Distributor;
