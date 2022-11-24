import * as ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";

const CartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      let addedItem = state.find(
        (c) => c.product.id === action.payload.product.id
      );
      if (addedItem) {
        let newState = state.map((cartItem) => {
          if (cartItem.product.id === action.payload.product.id) {
            return Object.assign({}, addedItem, {
              quantity: addedItem.quantity + 1,
            });
          }
          return cartItem;
        });
        return newState;
      } else {
        return [...state, { ...action.payload }];
      }

    default:
      return state;
  }
};

export default CartReducer;
