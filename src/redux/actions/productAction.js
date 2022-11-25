import * as ActionTypes from "./actionTypes";
import axios from "axios";

export const getProductSuccess = (product) => {
  return {
    type: ActionTypes.GET_PRODUCTS_SUCCESS,
    payload: product,
  };
};

export const createProductSuccess = (product) => {
  return {
    type: ActionTypes.CREATE_PRODUCTS_SUCCESS,
    payload: product,
  };
};

export const updateProductSuccess = (product) => {
  return {
    type: ActionTypes.UPDATE_PRODUCTS_SUCCESS,
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

export const saveProductApi = (product) => {
  let url = "http://localhost:3000/products/" + (product.id || "");
  return fetch(url, {
    method: product.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(product),
  })
    .then(handleResponse)
    .catch(handleError);
};

export const saveProduct = (product) => (dispatch) => {
  return saveProductApi(product)
    .then((res) => {
      product.id
        ? dispatch(updateProductSuccess(res))
        : dispatch(createProductSuccess(res));
    })
    .catch((error) => {
      throw error;
    });
};

export const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  }

  const error = response.text();
  throw new Error(error);
};

export const handleError = (error) => {
  console.error("There is an error occured!");
  throw error;
};
