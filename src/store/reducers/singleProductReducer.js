const defaultState = {};

const PRODUCT = "PRODUCT";
const CHANGE_COUNT_ITEM = "CHANGE_COUNT_ITEM";

export const singleProductReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PRODUCT:
      return { ...action.payload, count: 1 };
    case CHANGE_COUNT_ITEM:
      if (state.count !== 1 || Math.sign(action.payload) !== -1) {
        return { ...state, count: state.count + action.payload };
      } else {
        return { ...state, count: state.count };
      }

    default:
      return state;
  }
};

export const productAction = (payload) => ({ type: PRODUCT, payload });
export const changeCountItemAction = (payload) => ({
  type: CHANGE_COUNT_ITEM,
  payload,
});
