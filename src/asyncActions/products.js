import { ROOT_URL } from "..";
import { allProductsAction, allSalesProductsAction, categoryProductsAction, topSalesProductsAction } from "../store/reducers/productsReducer";

//-----------------------------------all-Products--------------------------------------------

export function fetchAllProducts(type) {
    return function (dispatch) {
      fetch(ROOT_URL + "/products/all")
        .then((res) => res.json())
        .then((data) => {
          if (type === 'allProducts') {
            dispatch(allProductsAction(data));
          } else if (type === "allSales") {
            dispatch(allSalesProductsAction(data));
          } else if (type === "topSales") {
            dispatch(topSalesProductsAction(data));
        }
        });
    };
}
  
//----------------------------------CategoryProducts---------------------------------------

export function fetchCategoryProducts(id){
    return function(dispatch){
        fetch(ROOT_URL+'/categories/'+id)
            .then(res => res.json())
            .then(data => dispatch(categoryProductsAction(data)))
    }
  }