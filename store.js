import { createStore, applyMiddleware } from "redux";
import { writeFavoritesToLocalStorage } from "./apps/challenge/actions/helpers";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";

import rootReducer from "./reducer";

export default preloadedState => {
  let store;
  if (typeof window !== "undefined") {
    store = createStore(
      rootReducer,
      preloadedState,
      composeWithDevTools(applyMiddleware(thunk))
    );
    store.subscribe(() => {
      writeFavoritesToLocalStorage(store.getState().favorites);
    });
  } else {
    store = createStore(rootReducer, preloadedState);
  }
  return store;
};
