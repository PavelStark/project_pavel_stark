import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ROOT_URL } from "../../index";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProducts,
  fetchCategoryProducts,
} from "../../asyncActions/products";
import { clearDataAction } from "../../store/reducers/productsReducer";
import { addItemAction } from "../../store/reducers/cartReducer";
import ButtonAddToCart from "../../ui/Buttons/ButtonAddToCart/ButtonAddToCart";
import style from "./ProductsContainer.module.css";

export default function ProductContainer({ type }) {
  const { id } = useParams();
  const { products } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const filtered_prodcuts = products.filter(
    (el) => el.isShow && el.isShowPrice
  );

  console.log(products);

  useEffect(() => {
    dispatch(clearDataAction());
    if (type === "categoryProducts") {
      dispatch(fetchCategoryProducts(id));
    } else if (type === "allProducts") {
      dispatch(fetchAllProducts(type));
    } else if (type === "allSales") {
      dispatch(fetchAllProducts(type));
    } else if (type === "topSales") {
      dispatch(fetchAllProducts(type));
    }
  }, [dispatch, type, id]);

  //----------------------------------------------------------------------------

  return (
    <div className={style.productsContainer}>
      {filtered_prodcuts.map((elem) => (
        <Link to={"/products/" + elem.id} key={elem.id}>
          <div>
            <div className={style.imageContainer}>
              <img alt="Products" src={ROOT_URL + elem.image} />
              <div
                className={style.salePercent}
                style={{ display: elem.discont_price ? "block" : "none" }}
              >
                <p>-{elem.percent}%</p>
              </div>
              <div className={style.btnContainer}>
                <ButtonAddToCart
                  onClick={(event) => {
                    event.preventDefault();
                    dispatch(addItemAction({ ...elem, count: 1 }));
                  }}
                  title="Add to cart"
                />
              </div>
              <div className={style.productInfo}>
                <abbr title={elem.title}>
                  <p className={style.productTitle}>{elem.title}</p>
                </abbr>
                <div className={style.priceContainer}>
                  <p>
                    {elem.discont_price
                      ? "$" + elem.discont_price.toFixed(2)
                      : "$" + elem.price.toFixed(2)}
                  </p>
                  <p className={style.sale}>
                    {elem.discont_price ? "$" + elem.price.toFixed(2) : ""}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
