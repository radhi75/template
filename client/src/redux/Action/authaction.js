import axios from "axios";
import {
  FAIL,
  GETUSERS,
  GET_CURRENT,
  LOGIN,
  LOGOUT,
  REGISTER,
} from "../Type/authtype";
import { alert_error } from "./errors";

export const register = (data, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/user/register", data);
    dispatch({ type: REGISTER, payload: res.data });
    navigate("/Login");
  } catch (error) {
    error.response.data.errors.forEach((el) => {
      dispatch(alert_error(el.msg));
    });
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const login = (data, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/user/login", data);
    dispatch({ type: LOGIN, payload: res.data });
    console.log(res.data);
    if (res.data.founduser.role == "user") {
      return navigate("/profile");
    } else if (res.data.founduser.role == "enseignant") {
      return navigate("/enseignant");
    } else if (res.data.founduser.role == "admin") {
      return navigate("/admin");
    }
  } catch (error) {
    error.response.data.errors.forEach((el) => {
      dispatch(alert_error(el.msg));
    });
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const get_current = () => async (dispatch) => {
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/user/currently", config);
    dispatch({ type: GET_CURRENT, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const logout = () => {
  return { type: LOGOUT };
};

export const deleteuser = (id) => async (dispatch) => {
  try {
    await axios.delete(`/user/deletinguser/${id}`);
    dispatch(get_current(id));
  } catch (error) {
    console.log(error);
  }
};
export const updateuser = (id, updateuser) => async (dispatch) => {
  try {
    await axios.put(`/user/updateuser/${id}`, updateuser);
    dispatch(get_current(id));
  } catch (error) {
    console.log(error);
  }
};
export const get_users = () => async (dispatch) => {
  try {
    const res = await axios.get("/user/users");

    dispatch({ type: GETUSERS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
