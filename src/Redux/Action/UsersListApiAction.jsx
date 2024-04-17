import axios from "axios";
import { userlistdata } from "../Constants/UserListApiConstant";

export const UsersListApiAction = (payload) => async (dispatch) => {
  const token =
    "eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJpc3MiOiJodHRwczovL3ZpbmlmZXJhZGV2LmIyY2xvZ2luLmNvbS82YzQxMzg2My1jMzcyLTQ1YjUtYjFkYS02YTZjY2MzN2IxZjgvdjIuMC8iLCJzdWIiOiJkZWUxZTc0OC04MGMwLTQyYTAtODk2OS0yZWU4ZGMyMTA2OGQiLCJhdWQiOiI0MDM1ODU1OS0zMDg1LTQ0NDctOGIwZC02NGFlNGZlNTg5NjUiLCJleHAiOjE3MTMzNjEwNjksIm5vbmNlIjoiMDE4ZWViMDQtMGY1MC03YWRmLTlmMzktNTExYzkyMWVmZmQ1IiwiaWF0IjoxNzEzMzU3NDY5LCJhdXRoX3RpbWUiOjE3MTMzMzgxNjYsIm9pZCI6ImRlZTFlNzQ4LTgwYzAtNDJhMC04OTY5LTJlZThkYzIxMDY4ZCIsImVtYWlscyI6WyJrYXJ0aGlrLnN1bmRhcmFtQGNvbmNlcnRpZGMuY29tIl0sInRmcCI6IkIyQ18xX3NpZ25pbiIsIm5iZiI6MTcxMzM1NzQ2OX0.qQnHgezGUzhqUajzET2GcB5p4_8M3tAIlWHMN5kItPAl2QxFQB8FApMU6JjLbfIp0QgYYSNbGXDg9ruf8vjIXeIIsD9AQE2PK748JJloqat8B--MARXJB6tnxXkKwRFbX2v8tNkkIU098hF_QFUFK1aHoeRPgnqFYNpZc5NCpJXfbj2n30ra9q4ctMYRDNyC1anxqbLAzuqJrOFVA9V2ClQ1JQXaSsavuYqO48VEWg0cl4heDpZJyW9fhuBHIXIvWOtFVP9KM-aB6WOAeyp1ghuGKu8RMOmrHbz1d8mVKPdrGglIim-Qvzrk2Y7puF_jsF-PgQ1A5H0NFBRTg-N4fw"
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
