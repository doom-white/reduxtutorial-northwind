import * as ActionTypes from "./actionTypes";

export const addToCart = (cartItem) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: cartItem,
  };
};

export const removeFromCart = (cartItem) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: cartItem,
  };
};
