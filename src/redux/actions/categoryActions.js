import * as ActionTypes from "./actionTypes";
import axios from "axios";

export const changeCategory = (category) => {
  return {
    type: ActionTypes.CHANGE_CATEGORY,
    payload: category,
  };
};

export const getCategoriesSuccess = (category) => {
  return {
    type: ActionTypes.GET_CATEGORIES_SUCCESS,
    payload: category,
  };
};

export const getCategories = () => async (dispatch) => {
  let url = "http://localhost:3000/categories";
  await axios.get(url).then((res) => dispatch(getCategoriesSuccess(res.data)));
};
