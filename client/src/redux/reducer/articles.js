import { GETARTICLES, LOADING, MYARTICLES } from "../ActionTypes/articles";
const initialState = {
  articles: [],
  myarticles: [],
  loading: false,
};
const articlesreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, loading: true };
    case GETARTICLES:
      return { ...state, articles: payload.articles, loading: false };
    case MYARTICLES:
      return { ...state, myarticles: payload, loading: false };

    default:
      return state;
  }
};
export default articlesreducer;
