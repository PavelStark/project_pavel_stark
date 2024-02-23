import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../asyncActions/singleProduct";
import { useParams } from "react-router-dom";
import { ROOT_URL } from "../../index";
import style from "./SigleProductContainer.module.css";
import plus from "../../ui/plus.png";
import minus from "../../ui/minus.png";
import { changeCountItemAction } from "../../store/reducers/singleProductReducer";
import { addItemAction } from "../../store/reducers/cartReducer";
import ButtonAddToCart from "../../ui/Buttons/ButtonAddToCart/ButtonAddToCart";

export default function SingleProductContainer() {
  const product = useSelector((store) => store.product);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  //-----------------------------------------------------------------
  function saleHandle() {
    let sale = 0;

    if (product.discont_price) {
      sale =
        "-" +
        Math.round(100 - (product.discont_price * 100) / product.price) +
        "%";
    } else sale = "";
    return sale;
  }

  //-----------------------------------------------------------------------------

  return (
    <div className="wrapper">
      <div className={style.singleProductContainer}>
        <div className={style.productImageContainer}>
          <img alt="Product" src={ROOT_URL + product.image} />
        </div>

        <h2 className={style.title}>{product.title}</h2>
        <div className={style.pricePlusMinusButtonContainer}>
          <div className={style.priceContainer}>
            <p className={style.salePrice}>
              {product.discont_price
                ? "$" + (product.discont_price * product.count).toFixed(2)
                : "$" + (product.price * product.count).toFixed(2)}
            </p>
            <p className={style.price}>
              {product.discont_price
                ? "$" + (product.price * product.count).toFixed(2)
                : ""}
            </p>
            <div
              className={style.salePercentContainer}
              style={{ display: product.discont_price ? "block" : "none" }}
            >
              <p className={style.sale}>{saleHandle()}</p>
            </div>
          </div>
          <div className={style.addProductContainer}>
            <div className={style.plusAndMinusAndButtonContainer}>
              <div className={style.plusAndMinusContainer}>
                <div
                  onClick={() => dispatch(changeCountItemAction(-1))}
                  className={style.minus}
                >
                  <img src={minus} alt="" />
                </div>
                <div className={style.number}>
                  <p>{product.count}</p>
                </div>
                <div
                  onClick={() => dispatch(changeCountItemAction(1))}
                  className={style.plus}
                >
                  <img src={plus} alt="" />
                </div>
              </div>
              <div className={style.btnContainer}>
                <ButtonAddToCart
                  onClick={() => dispatch(addItemAction(product))}
                  title="Add to cart"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={style.descriptionContainer}>
          <p className={style.textTitle}>Description</p>
          <p className={style.text}>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
