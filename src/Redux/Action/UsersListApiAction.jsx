import axios from "axios";
import { userlistdata } from "../Constants/UserListApiConstant";

export const UsersListApiAction = (payload) => async (dispatch) => {
  const token =
    "eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJpc3MiOiJodHRwczovL3ZpbmlmZXJhZGV2LmIyY2xvZ2luLmNvbS82YzQxMzg2My1jMzcyLTQ1YjUtYjFkYS02YTZjY2MzN2IxZjgvdjIuMC8iLCJzdWIiOiJkZWUxZTc0OC04MGMwLTQyYTAtODk2OS0yZWU4ZGMyMTA2OGQiLCJhdWQiOiI0MDM1ODU1OS0zMDg1LTQ0NDctOGIwZC02NGFlNGZlNTg5NjUiLCJleHAiOjE3MTMyNzc3ODcsIm5vbmNlIjoiMDE4ZWU1YWQtZTBiYi03MGI5LThlZWYtZGYwNDNlY2M3ODU5IiwiaWF0IjoxNzEzMjc0MTg3LCJhdXRoX3RpbWUiOjE3MTMyNDg2MzEsIm9pZCI6ImRlZTFlNzQ4LTgwYzAtNDJhMC04OTY5LTJlZThkYzIxMDY4ZCIsImVtYWlscyI6WyJrYXJ0aGlrLnN1bmRhcmFtQGNvbmNlcnRpZGMuY29tIl0sInRmcCI6IkIyQ18xX3NpZ25pbiIsIm5iZiI6MTcxMzI3NDE4N30.hCjCF28PwcHMwl1jzLMpGHdd0XD-GP_0uGsEiTeL_udWURk-bmK7q2YNi1hCEC617ZEGFYvt0kC3N_vj3Zc8TxLSWKc5wy0K6MaVDBPS7vQ7FOiDqCDgE2Rg94tXQn4_-A-0ygQAHmrIvMb2jnUAe4DXOsx-pgA-mhI8-TtDKh0OrZrV2gi0VEemnJ0BAqp53WPvLVpxtl4IKoAndZPIiXiXHe2v09OlTzT2Kk86QrTtiwxFReeSftBY_jy-CKthGTzJn8EHcKui5kPpWtzpPvO2ClMyJR3yTsbX0bJqCrELxM_wbUS38cNc86eJD91jYGZapJie3P_VHdY5kSAnsQ"
  await dispatch({
    type: userlistdata.REQUEST,
    payload: { loading: true },
  });
  try {
    const { data } = await axios.post(
      "https://dev-vinifera-function.azurewebsites.net/api/getUsers",
      payload,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    await dispatch({
      type: userlistdata.SUCCESS,
      payload: { loading: false, data: data },
    });
  } catch (error) {
    await dispatch({
      type: userlistdata.ERROR,
      payload: { loading: false, data: [], error: error?.response?.data },
    });
  }
  await dispatch({
    type: userlistdata.RESET,
    payload: {},
  });
};
