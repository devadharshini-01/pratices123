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
  status: yup.string().required("required"),
  userType: yup.string().required("required"),
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
  // monthlySalesSort: yup.string().required("required"),
  // monthlyOrders: yup.string().required("required"),
  noOfOrders: yup.string().required("required"),
  // noOfMappedRetailers: yup.string().required("required"),
  monthlySales: yup.string().required("required"),
  joinedDate: yup.string().required("required"),
});

export const Detailpage = ({ edit, setEdit }) => {
  const dispatch = useDispatch();
  const { Id } = useParams();
  const datalist = useSelector((state) => state.userlist.userdataapi);
  console.log(datalist, "datalist");
  const [updatedValues, setUpdatedValues] = useState();
  console.log(updatedValues, "updated");
  const handleFormSubmit = (values) => {
    setUpdatedValues(values);
    setEdit(false);
  };

  console.log(updatedValues, "updatedValues");
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
    validateOnBlur:false,
    validateOnChange:false,
    validationSchema,
   
    onSubmit: (values) => {
      handleFormSubmit(values);
      console.log(values, "values");
    },
  });
  console.log(formik, "formik");
  useEffect(() => {
    dispatch(UserGetApi(Id));
  }, [Id]);

  useEffect(() => {
    if (datalist?.data?.data) {
      setUpdatedValues(datalist?.data?.data);
    }
    formik.setValues(datalist?.data?.data);
  }, [datalist]);

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
          <div className="card border-0 p-3 mt-2">
            <div className="row">
              {updatedValues &&
                Object.keys(updatedValues).map((item) => {
                  return (
                    <div className="col-4">
                      <b>{item}</b>
                      {edit ? (
                        <>
                          <Input
                            name={item}
                            value={formik.values[item]}
                            onChange={formik.handleChange}
                          />
                          <p className="text-danger">{formik.errors[item]}</p>
                        </>
                      ) : (
                        <p>{updatedValues[item]} </p>
                      )}
                    </div>
                  );
                })}
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
