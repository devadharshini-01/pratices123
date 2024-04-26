import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserGetApi } from "../Redux/Action/UsersListApiAction";

const Datapage = () => {
  const { Id } = useParams();
  const dispatch = useDispatch();
  const listdata = useSelector((state) => state.userlist.userdataapi);
  const initialVal = listdata?.data?.data;
 console.log(listdata,"listdata");
  useEffect(() => {
    dispatch(UserGetApi(Id));
  }, []);

  return (
    <>
      <div className=" overflow-hidden flex-grow-1 d-flex flex-column">
 
          <div className="row  flex-grow-1">
      
              <div className="card border-0 p-3 mt-5">
                <div className="row">
                  {initialVal &&
                    Object.keys(initialVal).map((item) => {
                      console.log(item, "itemn");
                      return (
                        <div className="col-4">
                          <p>
                           <b className="text-block">{item}</b> <br></br>
                            {initialVal[item]}
                          </p>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
      
   
    </>
  );
};

export default Datapage;
