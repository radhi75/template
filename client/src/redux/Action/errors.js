import { ALERT_ERROR, CLEAR_ERROR } from "../Type/errortype";

export const alert_error = (msg) => async (dispatch) => {
  const id = Math.random();
  dispatch({ type: ALERT_ERROR, payload: { msg, id } });
  setTimeout(() => {
    dispatch({ type: CLEAR_ERROR, payload: id });
  }, 3000);
};
