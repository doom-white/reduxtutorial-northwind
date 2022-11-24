import * as ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";

const CategoryListReducer = (state = initialState.categories, action) => {
  switch (action.type) {
    case ActionTypes.GET_CATEGORIES_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};

export default CategoryListReducer;
