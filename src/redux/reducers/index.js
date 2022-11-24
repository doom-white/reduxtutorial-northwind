import { combineReducers } from "redux";
import ChangeCategoryReducer from "./changeCatReducer";
import CategoryListReducer from "./categoryListReducer";
import ProductListReducer from "./productListReducer";
import CartReducer from "./cartReducer";

const RootReducers = combineReducers({
  ChangeCategoryReducer,
  CategoryListReducer,
  ProductListReducer,
  CartReducer,
});

export default RootReducers;
