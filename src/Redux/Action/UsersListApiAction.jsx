import axios from "axios";
import { userdata, userlistdata } from "../Constants/UserListApiConstant";

import { token } from "../../Constant";

const getapi = process.env.REACT_APP_BASEURL;


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

export const UserGetApi = (userId) =>async(dispatch)=>{
  await dispatch ({
    type:userdata.REQUEST,
    payload:{loading:true},
})
try{
 const {data} = await axios.get(`${getapi}/getUserById?id=${userId}`,{
  headers:{Authorization:`Bearer ${token}`}
})
await dispatch({
  type:userdata.SUCCESS,
  payload:{loading:false,data:data},
})
}
catch (error){
await dispatch({
  type:userdata.ERROR,
  payload:{loading:false,data:{}},
})
}
}