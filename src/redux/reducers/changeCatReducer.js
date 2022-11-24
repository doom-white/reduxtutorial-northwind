import * as ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";

const ChangeCategoryReducer = (
  state = initialState.currentCategory,
  action
) => {
  switch (action.type) {
    case ActionTypes.CHANGE_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};

export default ChangeCategoryReducer;
