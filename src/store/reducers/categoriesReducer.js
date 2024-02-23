const defaultState = {
  categories: [],
};

const ALL_CATEGORIES = "ALL_CATEGORIES";
const NOT_ALL_CATEGORIES = "NOT_ALL_CATEGORIES";

export const categoriesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ALL_CATEGORIES:
      return { categories: action.payload };

    case NOT_ALL_CATEGORIES:
      let notAllCategories = action.payload.slice(0, 4);
      return { categories: notAllCategories };

    default:
      return state;
  }
};

export const categoriesAction = (payload) => ({
  type: ALL_CATEGORIES,
  payload,
});
export const notAllCategoriesAction = (payload) => ({
  type: NOT_ALL_CATEGORIES,
  payload,
});
