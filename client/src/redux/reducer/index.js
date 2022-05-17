import { combineReducers } from "redux";
import authreducer from "./authreducer";
import errorreducer from "./errorreducer";
import articlesreducer from "./articles";
const rootReducer = combineReducers({
  authreducer,
  errorreducer,
  articlesreducer,
});
export default rootReducer;
