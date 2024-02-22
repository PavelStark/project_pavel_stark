import { ROOT_URL } from "../index";
import { productAction } from "../store/reducers/singleProductReducer";

//---------------------------------single-Product---------------------------------------
export function fetchProduct(id){
    return function(dispatch){
        fetch(ROOT_URL+'/products/'+id)
        .then(res => res.json())
        .then(data => dispatch(productAction(data[0])))
    }
}
  

