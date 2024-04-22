import React from 'react'
import { useLocation } from 'react-router-dom';
import Sidebar from '../component/custom/Sidebar';
import Header from '../component/custom/Header';

const Datapage = () => {
  const location = useLocation();
  const initialVal = location?.state?.DD;
  const returnPath = localStorage.getItem("ReturnPath");
  const distributorPath = returnPath ? returnPath.replace(/\//g, "") : "";
  return (
    <>
      <div className="overflow-hidden">
        <div className="vh-100">
          <div className="row">
        

            <div className=" col-sm-12 col-md-10 col-lg-10 ">
  
              <Header title={distributorPath} />
              <div className="card border-0 p-3 mt-5">
                <div className="row">
                  <div className="col-4">
                    <b>UserID</b>

                    <p>{initialVal?.userId}</p>

                    <b>Status</b>

                    <p>{initialVal?.status}</p>

                    <b>ProfileId</b>

                    <p>{initialVal?.profileId}</p>

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

                    <p>{initialVal?.monthlySalesSort}</p>
                  </div>
                  <div className="col-4">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Datapage


