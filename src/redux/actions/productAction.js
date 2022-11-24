import * as ActionTypes from "./actionTypes";
import axios from "axios";

export const getProductSuccess = (product) => {
  return {
    type: ActionTypes.GET_PRODUCTS_SUCCESS,
    payload: product,
  };
};

export const getProducts = (catID) => async (dispatch) => {
  let url = "http://localhost:3000/products";
  if (catID) {
    url += `?categoryId=${catID}`;
  }
  await axios.get(url).then((res) => dispatch(getProductSuccess(res.data)));
};
