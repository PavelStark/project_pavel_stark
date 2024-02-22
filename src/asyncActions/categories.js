import { ROOT_URL } from "..";
import {categoriesAction,notAllCategoriesAction,
} from "../store/reducers/categoriesReducer";

//------------------------------------Categories--------------------------------------------
export function fetchCategories(type) {
  return function (dispatch) {
    fetch(ROOT_URL + "/categories/all")
      .then((res) => res.json())
      .then((data) => {
        if (type === "allCategories") {
          dispatch(categoriesAction(data));
        } else if (type === "notAllCategories") {
          dispatch(notAllCategoriesAction(data));
        }
      });
  };
}
