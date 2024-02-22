const defaultState = {
  category_title: "",
  products: [],
};

const CLEAR_DATA = "CLEAR_DATA";
const ALL_PRODUCTS = "ALL_PRODUCTS";
const ALL_SALE_PRODUCTS = "ALL_SALE_PRODUCTS";
const TOP_SALES_PRODUCTS = "TOP_SALES_PRODUCTS";
const CATEGORY_PRODUCTS = "CATEGORY_PRODUCTS";
const FILTER_BY_PRICE = "FILTER_BY_PRICE";
const SORT = "SORT";
const FILTER_BY_SALE = "FILTER_BY_SALE";


function addProps(array) {
  return array.map((elem) => ({
    ...elem,
    isShow: true,
    isShowPrice: true,
    percent: elem.discont_price !== null ? Math.round(100 - (elem.discont_price * 100) / elem.price) : 0,
    truePrice: (function () {
      if (elem.discont_price !== null) {
        return elem.price = elem.discont_price
      }
      else if ((elem.discont_price === null)) {
        return elem.price
      }
      else return elem.price
    }())
  }));
}

export const productsReducer = (state = defaultState, action) => {
  switch (action.type) {

    //--------------------------------defaultState------------------------------------------
    case CLEAR_DATA:
      return defaultState;

    //--------------------------------all-products------------------------------------------
    case ALL_PRODUCTS:
      return { products: addProps(action.payload) };

    //--------------------------------sale products-----------------------------------------
    case ALL_SALE_PRODUCTS:
      let sales_products = action.payload.filter((elem) => elem.discont_price);
      return { products: addProps(sales_products) };

    //-------------------------------top-sale-products--------------------------------------
    case TOP_SALES_PRODUCTS:
      let topSales = addProps(action.payload)
        .filter((elem) => elem.discont_price)
        .sort((a, b) => b.percent - a.percent)
        .slice(0, 4);
      return { products: topSales };
    
    //-------------------------------category products--------------------------------------
    case CATEGORY_PRODUCTS:
      return {
        category_title: action.payload.category.title,
        products: addProps(action.payload.data)
      }

    //------------------------------------Sort----------------------------------------------
    case SORT:
      //-------------price_low_hight
      if (action.payload === "price_low_hight") {
        let sorted = state.products.sort((a, b) => a.truePrice - b.truePrice)
        return { products: sorted };
        //-------------price_hight_low
      } else if (action.payload === "price_hight_low") {
        let sorted = state.products.sort((a, b) => b.truePrice - a.truePrice)
        return { products: sorted };
        //--------------sale_low_hight
      } else if (action.payload === "sale_low_hight") {
        let sorted = state.products
          .sort((a, b) => a.percent - b.percent);
        return { products: sorted };
        //--------------sale_hight_low
      } else if (action.payload === "sale_hight_low") {
        let sorted = state.products
          .sort((a, b) => b.percent - a.percent);
        return { products: sorted };
        //--------------title_A_Z 
      } else if (action.payload === "title_A_Z") {
        let sorted = state.products
          .sort((a, b) => { if (a.title < b.title) return -1 })
        return { products: sorted };
        //--------------title_Z_A
      } else if (action.payload === "title_Z_A") {
        let sorted = state.products
          .sort((a, b) => { if (a.title > b.title) return -1 })
        return { products: sorted };
        //--------------newest
      } else if (action.payload === "newest") {
        let sorted = state.products
        .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
        return { products: sorted };
        //--------------default
      } else if (action.payload === "default") {
        let sorted = state.products
          .sort((a, b) => a.id - b.id)
        return { products: sorted };
        //-------------------------------return-state-------
      } else {
        return state;
      }
    //-----------------------------------filter-by-sale-------------------------------------
    case FILTER_BY_SALE:
      if (action.payload) {
        return {
          ...state,
          products: state.products.map((elem) => {
            if (!elem.discont_price) {
              elem.isShow = false;
            }
            return elem;
          }),
        };
      } else {

        return {
          ...state,
          products: state.products.map((elem) => ({...elem, isShow : true}))
        };
      }
    //-----------------------------------filter-by-price-------------------------------------
    case FILTER_BY_PRICE:
      if (action.payload) {
        return {

          ...state, products: state.products.map((elem) => {
            if (!(elem.truePrice >= action.payload.from && elem.truePrice <= action.payload.to))
            { elem.isShowPrice = false }
            else if ((elem.truePrice >= action.payload.from && elem.truePrice <= action.payload.to))
            { elem.isShowPrice = true }
            return elem;
          })
        }
      } else {
        return {
          ...state,
          products: addProps(state.products)
        }
      }

    default:
      return state;
  }
};

//--------------------------------------------------------------------------------------------

export const clearDataAction = () => ({ type: CLEAR_DATA });
export const allProductsAction = (payload) => ({ type: ALL_PRODUCTS, payload });
export const allSalesProductsAction = (payload) => ({ type: ALL_SALE_PRODUCTS, payload });
export const topSalesProductsAction = (payload) => ({ type: TOP_SALES_PRODUCTS, payload });
export const categoryProductsAction = (payload) => ({ type: CATEGORY_PRODUCTS, payload });
export const filterBySaleAction = (payload) => ({ type: FILTER_BY_SALE, payload });
export const sortAction = (payload) => ({ type: SORT, payload });
export const filterByPriceAction = (payload) => ({ type: FILTER_BY_PRICE, payload });

