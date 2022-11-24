import { applyMiddleware, createStore } from "redux";
import RootReducers from "./reducers";
import thunk from "redux-thunk";

// const RootStore = createStore(RootReducers);

const RootStore = () => {
  return createStore(RootReducers, applyMiddleware(thunk));
};

export default RootStore;
