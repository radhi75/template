import axios from "axios";
import { GETARTICLES, MYARTICLES, LOADING } from "../ActionTypes/articles";

export const get_articles = () => async (dispatch) => {
  dispatch({ LOADING });
  try {
    const res = await axios.get("/articles/articles");
    dispatch({ type: GETARTICLES, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const my_articles = () => async (dispatch) => {
  dispatch({ type: LOADING });
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("articles/myarticles", config);
    dispatch({ type: MYARTICLES, payload: res.data.myarticles });
  } catch (error) {
    console.log(error);
  }
};
export const add_articles = (newarticles, navigate) => async (dispatch) => {
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
  try {
    await axios.post("/articles", newarticles, config);
    navigate("/profile/articles");
    dispatch(get_articles());
  } catch (error) {
    console.log(error);
  }
};
export const delete_articles = (id) => async (dispatch) => {
  try {
    await axios.delete(`/articles/deleting/${id}`);
    dispatch(get_articles());
  } catch (error) {
    console.log(error);
  }
};
export const update_articles = (id, updatearticles) => async (dispatch) => {
  try {
    await axios.put(`/articles/updating/${id}`, updatearticles);
    dispatch(get_articles());
  } catch (error) {
    console.log(error);
  }
};
