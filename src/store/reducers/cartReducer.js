const defaultState = {
  items: [],
  sumTotal: 0,
  countItems: 1,
};

const ADD_ITEM = "ADD_ITEM";
const DELITE_ITEM = "DELITE_ITEM";
const COUNT_CART_INCR = "COUNT_CART_INCR";
const COUNT_CART_DECR = "COUNT_CART_DECR";
const SUM_TOTAL = "SUM_TOTAL";
const CLEAR_CART = "CLEAR_CART";

export const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    //--------------------------------------------------------------------------------------
    case ADD_ITEM:
      let findItemIndex = state.items.findIndex(
        (elem) => elem.id === action.payload.id
      );
      if (findItemIndex !== -1) {
        return {
          ...state,
          items: state.items.map((elem) => {
            if (elem.id === action.payload.id) {
              elem.count += action.payload.count;
            }
            return elem;
          }),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload }],
        };
      }
    case SUM_TOTAL:
      const sumCounter = state.items.reduce((sum, item) => {
        return (
          sum +
          (item.discont_price !== null
            ? item.discont_price * item.count
            : item.price * item.count)
        );
      }, 0);
      return { ...state, sumTotal: sumCounter.toFixed(2) };

    //-------------------------------------------------------------------------------------
    case COUNT_CART_INCR:
      return {
        ...state,
        countItems: state.items.map((elem) => {
          if (action.payload === elem.id) {
            elem.count += 1;
          }
          return elem;
        }),
      };

    case COUNT_CART_DECR:
      return {
        ...state,
        countItems: state.items.map((elem) => {
          if (action.payload === elem.id && elem.count > 1) {
            elem.count -= 1;
          }
          return elem;
        }),
      };

    case DELITE_ITEM:
      let deliteItem = state.items.filter((elem) => elem.id !== action.payload);
      return {
        ...state,
        items: deliteItem,
      };
    
    case CLEAR_CART:
      let clearCart = state.items.filter((elem) => elem === action.payload);
      return {
        ...state,
        items: clearCart,
      };

    default:
      return state;
  }
};

export const addItemAction = (payload) => ({ type: ADD_ITEM, payload });
export const sumTotalAction = (payload) => ({ type: SUM_TOTAL, payload });
export const countCartIncrAction = (payload) => ({type: COUNT_CART_INCR,payload,});
export const countCartDecrAction = (payload) => ({type: COUNT_CART_DECR,payload,});
export const deliteItemAction = (payload) => ({ type: DELITE_ITEM, payload });
export const clearCartAction = (payload) => ({ type: CLEAR_CART, payload });
