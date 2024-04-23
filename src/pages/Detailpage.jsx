import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "../component/custom/Input";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserGetApi } from "../Redux/Action/UsersListApiAction";

const validationSchema = yup.object().shape({
  userId: yup.string().required("required"),
  emailId: yup.string().required("required"),
  displayId: yup.string().required("required"),
  status: yup.string().required("required"),
  userType: yup.string().required("required"),
  profileId: yup.string().required("required"),
  companyName: yup.string().required("required"),
  phoneNumber: yup.string().required("required"),
  website: yup.string().required("required"),
  primaryContactName: yup.string().required("required"),
  address: yup.string().required("required"),
  activationKey: yup.string().required("required"),
  posProvider: yup.string().required("required"),
  websiteProvider: yup.string().required("required"),
  licenceNumber: yup.string().required("required"),
  licenceType: yup.string().required("required"),
  ipAddress: yup.string().required("required"),
  inventoryManagementSystem: yup.string().required("required"),
  additionalOrderFulfillmentSoftware: yup.string().required("required"),
  minimumOrderThresholds: yup.string().required("required"),
  numberOfStoreLocations: yup.string().required("required"),
  orderCutOffTime: yup.string().required("required"),
  monthlySalesSort: yup.string().required("required"),
  monthlyOrders: yup.string().required("required"),
  noOfOrders: yup.string().required("required"),
  noOfMappedRetailers: yup.string().required("required"),
  monthlySales: yup.string().required("required"),
  joinedDate: yup.string().required("required"),
});

export const Detailpage = ({ edit, setEdit }) => {
  const dispatch = useDispatch();
  const { Id } = useParams();
  const datalist = useSelector((state) => state.userlist.userdataapi);
  const [updatedValues, setUpdatedValues] = useState();
  console.log(datalist, "dddd", updatedValues, "updated");
  const handleFormSubmit = (values) => {
    setUpdatedValues(values);
    setEdit(false);
  };

  const formik = useFormik({
    initialValues: {
      userId: "",
      emailId: "",
      displayId: "",
      status: "",
      userType: "",
      profileId: "",
      companyName: "",
      phoneNumber: "",
      website: "",
      primaryContactName: "",
      address: "",
      activationKey: "",
      posProvider: "",
      websiteProvider: "",
      licenceNumber: "",
      licenceType: "",
      ipAddress: "",
      inventoryManagementSystem: "",
      additionalOrderFulfillmentSoftware: "",
      minimumOrderThresholds: "",
      numberOfStoreLocations: "",
      orderCutOffTime: "",
      monthlySalesSort: "",
      monthlyOrders: "",
      noOfOrders: "",
      noOfMappedRetailers: "",
      monthlySales: "",
      joinedDate: "",
    },
    validationSchema,
    onSubmit: (values) => {
      handleFormSubmit(values);
    },
  });

  useEffect(() => {
    dispatch(UserGetApi(Id));
  }, [Id]);

  useEffect(() => {
    if (datalist?.data?.data) {
      setUpdatedValues(datalist?.data?.data);
      // formik.setFieldValue("userId", datalist?.data?.data?.userId);
    }
    formik.setFieldValue("userId", datalist?.data?.data?.userId);
  }, [datalist, edit]);
  return (
    <form onSubmit={formik.handleSubmit}>
      <>
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabindex="0"
        >
          <div className="card border-0 p-3 mt-5">
            <div className="row">
              <div className="col-4">
                <b>UserID</b>

                {edit ? (
                  <Input
                    name="userId"
                    value={formik?.values?.userId}
                    onChange={formik.handleChange}
                  />
                ) : (
                  <p>{updatedValues?.userId}</p>
                )}
                <p className="text-danger">{formik?.errors?.userId}</p>
                <b>Status</b>

                {edit ? (
                  <Input
                    name="status"
                    value={formik.values?.status}
                    onChange={formik.handleChange}
                  />
                ) : (
                  <p>{updatedValues?.status}</p>
                )}
                <p className="text-danger">{formik.errors.status}</p>
                <b>ProfileId</b>

                {edit ? (
                  <Input
                    name="profileId"
                    value={formik.values?.profileId}
                    onChange={formik.handleChange}
                  />
                ) : (
                  <p>{updatedValues?.profileId}</p>
                )}
                <p className="text-danger">{formik.errors.profileId}</p>
                <b>Website</b>

                {edit ? (
                  <Input
                    name="website"
                    value={formik.values?.website}
                    onChange={formik.handleChange}
                  />
                ) : (
                  <p>{updatedValues?.website}</p>
                )}
                <p className="text-danger">{formik.errors.website}</p>
                <b>ActivationKey</b>

                {edit ? (
                  <Input
                    name="activationKey"
                    value={formik.values?.activationKey}
                    onChange={formik.handleChange}
                  />
                ) : (
                  <p>{updatedValues?.activationKey}</p>
                )}
                <p className="text-danger">{formik.errors.activationKey}</p>
                <b>LicenceManagementSystem</b>

                {edit ? (
                  <Input
                    name="licenceNumber"
                    value={formik.values?.licenceNumber}
                    onChange={formik.handleChange}
                  />
                ) : (
                  <p>{updatedValues?.licenceNumber}</p>
                )}
                <p className="text-danger">{formik.errors.licenceNumber}</p>
                <b>InventoryManagementSystem</b>

                {edit ? (
                  <Input
                    name="inventoryManagementSystem"
                    value={formik.values?.inventoryManagementSystem}
                    onChange={formik.handleChange}
                  />
                ) : (
                  <p>{updatedValues?.inventoryManagementSystem}</p>
                )}
                <p className="text-danger">
                  {formik.errors.inventoryManagementSystem}
                </p>
                <b>Monthlyorders</b>

                {edit ? (
                  <Input
                    name="monthlyOrders"
                    value={formik.values?.monthlyOrders}
                    onChange={formik.handleChange}
                  />
                ) : (
                  <p>{updatedValues?.monthlyOrders}</p>
                )}
                <p className="text-danger">{formik.errors.monthlyOrders}</p>
                <b>Nooforders</b>

                {edit ? (
                  <Input
                    name="noofOrders"
                    value={formik.values?.noOfOrders}
                    onChange={formik.handleChange}
                  />
                ) : (
                  <p>{updatedValues?.noOfOrders}</p>
                )}
                <p className="text-danger">{formik.errors.noOfOrders}</p>
                <b>Ordercutofftime</b>

                {edit ? (
                  <Input
                    name="orderCutOffTime"
                    value={formik.values?.orderCutOffTime}
                    onChange={formik.handleChange}
                  />
                ) : (
                  <p>{updatedValues?.orderCutOffTime}</p>
                )}
                <p className="text-danger">{formik.errors.orderCutOffTime}</p>
                <b>MonthlySalessort</b>

                {edit ? (
                  <Input
                    name="monthlyOrders"
                    value={formik.values?.monthlyOrders}
                    onChange={formik.handleChange}
                  />
                ) : (
                  <p>{updatedValues?.monthlySalesSort}</p>
                )}
                <p className="text-danger">{formik.errors.monthlySalesSort}</p>
              </div>
              <div className="col-4">
                <b>EmailId</b>

                {edit ? (
                  <Input
                    name="emailId"
                    value={formik.values?.emailId}
                    onChange={formik.handleChange}
                  />
                ) : (
                  <p>{updatedValues?.emailId}</p>
                )}
                <p className="text-danger">{formik.errors.emailId}</p>
                <b>Usertype</b>

                {edit ? (
                  <Input
                    name="userType"
                    value={formik.values?.userType}
                    onChange={formik.handleChange}
                  />
                ) : (
                  <p>{updatedValues?.userType}</p>
                )}
                <p className="text-danger">{formik.errors.userType}</p>
                <b>Companyname</b>

                {edit ? (
                  <Input
                    name="companyName"
                    value={formik.values?.companyName}
                    onChange={formik.handleChange}
                  />
                ) : (
                  <p>{updatedValues?.companyName}</p>
                )}
                <p className="text-danger">{formik.errors.companyName}</p>
                <b>Primarycontactname</b>

                {edit ? (
                  <Input
                    name="primaryContactName"
                    value={formik.values?.primaryContactName}
                    onChange={formik.handleChange}
                  />
                ) : (
                  <p>{updatedValues?.primaryContactName}</p>
                )}
                <p className="text-danger">
                  {formik.errors.primaryContactName}
                </p>
                <b>Posprvider</b>

                {edit ? (
                  <Input
                    name="posProvider"
                    value={formik.values?.posProvider}
                    onChange={formik.handleChange}
                  />
                ) : (
                  <p>{updatedValues?.posProvider}</p>
                )}
                <p className="text-danger">{formik.errors.posProvider}</p>
                <b>Licencetype</b>

                {edit ? (
                  <Input
                    name="licenceType"
                    value={formik.values?.licenceType}
                    onChange={formik.handleChange}
                  />
                ) : (
                  <p>{updatedValues?.licenceType}</p>
                )}
                <p className="text-danger">{formik.errors.licenceType}</p>
                <b>AdditionalOrderFulfillmentSoftware</b>

                {edit ? (
                  <Input
                    name="additionalOrderFulfillmentSoftware"
                    value={formik.values?.additionalOrderFulfillmentSoftware}
                    onChange={formik.handleChange}
                  />
                ) : (
                  <p>{updatedValues?.additionalOrderFulfillmentSoftware}</p>
                )}
                <p className="text-danger">
                  {formik.errors.additionalOrderFulfillmentSoftware}
                </p>
                <b>MinimumOrderThresholds</b>

                {edit ? (
                  <Input
                    name="minimumOrderThresholds"
                    value={formik.values?.minimumOrderThresholds}
                    onChange={formik.handleChange}
                  />
                ) : (
                  <p>{updatedValues?.minimumOrderThresholds}</p>
                )}
                <p className="text-danger">
                  {formik.errors.minimumOrderThresholds}
                </p>
                <b>NumberOfStoreLocations</b>

                {edit ? (
                  <Input
                    name="numberOfStoreLocations"
                    value={formik.values?.numberOfStoreLocations}
                    onChange={formik.handleChange}
                  />
                ) : (
                  <p>{updatedValues?.numberOfStoreLocations}</p>
                )}
                <p className="text-danger">
                  {formik.errors.numberOfStoreLocations}
                </p>
              </div>
              <div className="col-4">
                <b>DisplayId</b>

                {edit ? (
                  <Input
                    name="displayId"
                    value={formik.values?.displayId}
                    onChange={formik.handleChange}
                  />
                ) : (
                  <p>{updatedValues?.displayId}</p>
                )}
                <p className="text-danger">{formik.errors.displayId}</p>
                <b>Joineddate</b>

                {edit ? (
                  <Input
                    name="joinedDate"
                    value={formik.values?.joinedDate}
                    onChange={formik.handleChange}
                  />
                ) : (
                  <p>{updatedValues?.joinedDate}</p>
                )}
                <p className="text-danger">{formik.errors.joinedDate}</p>
                <b>Phonenumber</b>

                {edit ? (
                  <Input
                    name="phoneNumber"
                    value={formik.values?.phoneNumber}
                    onChange={formik.handleChange}
                  />
                ) : (
                  <p>{updatedValues?.phoneNumber}</p>
                )}
                <p className="text-danger">{formik.errors.phoneNumber}</p>
                <b>Address</b>

                {edit ? (
                  <Input
                    name="joinedDate"
                    value={formik.values?.address}
                    onChange={formik.handleChange}
                  />
                ) : (
                  <p>{updatedValues?.address}</p>
                )}
                <p className="text-danger">{formik.errors.address}</p>
                <b>websiteProvider</b>

                {edit ? (
                  <Input
                    name="websiteProvider"
                    value={formik.values?.websiteProvider}
                    onChange={formik.handleChange}
                  />
                ) : (
                  <p>{updatedValues?.websiteProvider}</p>
                )}
                <p className="text-danger">{formik.errors.websiteProvider}</p>
                <b>IpAddress</b>

                {edit ? (
                  <Input
                    name="ipAddress"
                    value={formik.values?.ipAddress}
                    onChange={formik.handleChange}
                  />
                ) : (
                  <p>{updatedValues?.ipAddress}</p>
                )}
                <p className="text-danger">{formik.errors.ipAddress}</p>
                <b>NoOfMappedRetailers</b>

                {edit ? (
                  <Input
                    name="noOfMappedRetailers"
                    value={formik.values?.noOfMappedRetailers}
                    onChange={formik.handleChange}
                  />
                ) : (
                  <p>{updatedValues?.noOfMappedRetailers}</p>
                )}
                <p className="text-danger">
                  {formik.errors.noOfMappedRetailers}
                </p>
                <b>Monthlysales</b>

                {edit ? (
                  <Input
                    name="monthlySales"
                    value={formik.values?.monthlySales}
                    onChange={formik.handleChange}
                  />
                ) : (
                  <p>{updatedValues?.monthlySales}</p>
                )}
                <p className="text-danger">{formik.errors.monthlySales}</p>
              </div>
            </div>

            {edit && (
              <div className="gap-2 d-flex justify-content-sm-end ">
                <button type="submit" className="btn btn-primary mb-4 m-4">
                  update
                </button>
              </div>
            )}
          </div>
        </div>
      </>
    </form>
  );
};
