import * as ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";

const ProductListReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};

export default ProductListReducer;
