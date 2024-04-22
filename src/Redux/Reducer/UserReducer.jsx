
import { userdata, userlistdata } from "../Constants/UserListApiConstant";

let initialValues = {
  userlistapi: [],
  userdataapi:[]
};

export const UserReducer = (value = initialValues, action) => {
  switch (action?.type) {
    case userlistdata.REQUEST:
      return { userlistapi: action?.payload };
    case userlistdata.SUCCESS:
      return { userlistapi: action?.payload };
    case userlistdata.ERROR:
      return { userlistapi: action?.payload };
      case userdata.REQUEST:
        return {userdataapi:action?.payload};
        case userdata.SUCCESS:
          return{userdataapi:action?.payload};
          case userdata.ERROR:
            return {userdataapi:action?.payload};
    default:
      return value;
  }
};

