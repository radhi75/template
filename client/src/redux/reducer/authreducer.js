import {
  FAIL,
  GETUSERS,
  GET_CURRENT,
  LOGIN,
  LOGOUT,
  REGISTER,
} from "../ActionTypes/authtype";
const initialState = {
  users: [],
  user: {},
  errors: [],
};
const authreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.user };
    case LOGIN:
      localStorage.setItem("user", JSON.stringify(payload.founduser));
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.founduser };
    case GET_CURRENT:
      return { ...state, user: payload.userr };

    case GETUSERS:
      return { ...state, users: payload.users };
    case FAIL:
      return { ...state, errors: payload.errors, user: null };
    case LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("id");
      return { ...state, user: null };
    default:
      return state;
  }
};
export default authreducer;
