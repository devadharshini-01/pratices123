import axios from "axios";
import { userlistdata } from "../Constants/UserListApiConstant";

const getapi = process.env.REACT_APP_BASEURL;
const token = process.env.REACT_APP_TOKEN;
export const UsersListApiAction = (payload) => async (dispatch) => {
  console.log(getapi,"get");

  await dispatch({
    type: userlistdata.REQUEST,
    payload: { loading: true },
  });
  try {
    const { data } = await axios.post(`${getapi}/getUsers`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
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
