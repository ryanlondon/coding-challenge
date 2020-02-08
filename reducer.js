// import { combineReducers } from "redux";

export const initialState = {
  name: "", // App Name
  params: {}, // Express/NEXTjs URL Params/Queries
  markdown: "", // Markdown Notes
  artworks: null,
  search: null,
  favorites: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PAGE_DATA":
      return { ...state, ...action.payload };
    case "SET_ARTWORKS_DATA":
      return { ...state, artworks: action.payload };
    case "SEARCH_ARTWORKS_BY_TITLE":
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

export default reducer;
