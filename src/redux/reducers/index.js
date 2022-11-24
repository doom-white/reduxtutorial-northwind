import { combineReducers } from "redux";
import ChangeCategoryReducer from "./changeCatReducer";
import CategoryListReducer from "./categoryListReducer";

const RootReducers = combineReducers({
  ChangeCategoryReducer,
  CategoryListReducer,
});

export default RootReducers;
