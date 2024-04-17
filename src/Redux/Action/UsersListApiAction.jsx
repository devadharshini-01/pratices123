import axios from "axios";
import { userlistdata } from "../Constants/UserListApiConstant";

export const UsersListApiAction = (payload) => async (dispatch) => {
  const token =
    "eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJpc3MiOiJodHRwczovL3ZpbmlmZXJhZGV2LmIyY2xvZ2luLmNvbS82YzQxMzg2My1jMzcyLTQ1YjUtYjFkYS02YTZjY2MzN2IxZjgvdjIuMC8iLCJzdWIiOiJkZWUxZTc0OC04MGMwLTQyYTAtODk2OS0yZWU4ZGMyMTA2OGQiLCJhdWQiOiI0MDM1ODU1OS0zMDg1LTQ0NDctOGIwZC02NGFlNGZlNTg5NjUiLCJleHAiOjE3MTMzMzYwNDYsIm5vbmNlIjoiMDE4ZWU1YWQtZTBiYi03MGI5LThlZWYtZGYwNDNlY2M3ODU5IiwiaWF0IjoxNzEzMzMyNDQ2LCJhdXRoX3RpbWUiOjE3MTMyNDg2MzEsIm9pZCI6ImRlZTFlNzQ4LTgwYzAtNDJhMC04OTY5LTJlZThkYzIxMDY4ZCIsImVtYWlscyI6WyJrYXJ0aGlrLnN1bmRhcmFtQGNvbmNlcnRpZGMuY29tIl0sInRmcCI6IkIyQ18xX3NpZ25pbiIsIm5iZiI6MTcxMzMzMjQ0Nn0.dGPfFh1B7nTlcIn56DLN5Ep3WwqyJRHmQ2RyBMiB3FpRE9zCnIQTvvAJITijyXz6H_TgYNF68LnNg13vwcL2jqhMHWFyV1hzvzGIANLCTF3-X1x5pjkWVkDbsqzcmvCG8F_ELwuXAGvPJt6fwMGHe8RtH_TIIlx_6MavWoIpX5zhZV2GAN7yWIxsDsZSD-7P_m1qzHsHJ0dkBzbfNJQAWIBK9aGnrt-s78FttdIM9uifxX3yRrls0_7EW3miJS5JUZMNfjt0zUXNgS2xnO33epYEDwCC7LrctatY9EaQeL3UHzScEOJsKSq3oVp-Kyta-eGbhKHNOHURNOVmUDeiNQ"
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
