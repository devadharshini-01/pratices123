import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Sidebar from '../component/custom/Sidebar';
import Header from '../component/custom/Header';
import { useDispatch, useSelector } from 'react-redux';
import { UserGetApi } from '../Redux/Action/UsersListApiAction';

const Datapage = () => {
  const {userId}=useParams()
  const dispatch=useDispatch()
  const listdata=useSelector((state)=>state.userlist.userdataapi)
  console.log(listdata,"lll");
  const initialVal = listdata?.data?.data;
  const returnPath = localStorage.getItem("ReturnPath");
useEffect(()=>{
dispatch(UserGetApi(userId))
},[])

  return (
    <>
      <div className="overflow-auto">
        <div className="vh-100">
          <div className="row">
        

            <div className=" col-sm-12 col-md-10 col-lg-10 ">
  
     
              <div className="card border-0 p-3 mt-5">
                <div className="row">
       

                    {/* <b>UserID</b>

                    <p>{listdata?.userId}</p>

                    <b>Status</b>

                    <p>{listdata?.status}</p>

                    <b>ProfileId</b>

                    <p>{initialV?.profileId}</p> find how to map object

                    <b>Website</b>

                    <p>{initialVal?.website}</p>

                    <b>ActivationKey</b>

                    <p>{initialVal?.activationKey}</p>

                    <b>LicenceManagementSystem</b>

                    <p>{initialVal?.licenceNumber}</p>

                    <b>InventoryManagementSystem</b>

                    <p>{initialVal?.inventoryManagementSystem}</p>

                    <b>Monthlyorders</b>

                    <p>{initialVal?.monthlyOrders}</p>

                    <b>Nooforders</b>

                    <p>{initialVal?.noOfOrders}</p>

                    <b>Ordercutofftime</b>

                    <p>{initialVal?.orderCutOffTime}</p>

                    <b>MonthlySalessort</b>

                    <p>{initialVal?.monthlySalesSort}</p> */}
                    {initialVal&&Object.keys(initialVal).map((item)=>{
                      console.log(item,"itemn");
                      return(
                        <div className='col-4'>
                        <p>{item}:<br></br>{initialVal[item]}</p>
                        </div>
                      )
                     
                    })}
                  </div>
                  {/* <div className="col-4">
                    <b>EmailId</b>

                    <p>{initialVal?.emailId}</p>

                    <b>Usertype</b>
                    <p>{initialVal?.userType}</p>

                    <b>Companyname</b>

                    <p>{initialVal?.companyName}</p>

                    <b>Primarycontactname</b>

                    <p>{initialVal?.primaryContactName}</p>

                    <b>Posprvider</b>

                    <p>{initialVal?.posProvider}</p>

                    <b>Licencetype</b>

                    <p>{initialVal?.licenceType}</p>

                    <b>AdditionalOrderFulfillmentSoftware</b>

                    <p>{initialVal?.additionalOrderFulfillmentSoftware}</p>

                    <b>MinimumOrderThresholds</b>

                    <p>{initialVal?.minimumOrderThresholds}</p>

                    <b>NumberOfStoreLocations</b>

                    <p>{initialVal?.numberOfStoreLocations}</p>
                  </div>
                  <div className="col-4">
                    <b>DisplayId</b>

                    <p>{initialVal?.displayId}</p>

                    <b>Joineddate</b>

                    <p>{initialVal?.joinedDate}</p>

                    <b>Phonenumber</b>

                    <p>{initialVal?.phoneNumber}</p>

                    <b>Address</b>

                    <p>{initialVal?.address}</p>

                    <b>websiteProvider</b>

                    <p>{initialVal?.websiteProvider}</p>

                    <b>IpAddress</b>

                    <p>{initialVal?.ipAddress}</p>

                    <b>NoOfMappedRetailers</b>

                    <p>{initialVal?.noOfMappedRetailers}</p>

                    <b>Monthlysales</b>
                  </div> */}
                </div>
           
                
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Datapage


