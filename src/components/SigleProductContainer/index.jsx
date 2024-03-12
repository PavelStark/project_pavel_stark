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
      <div className={style.single_product_container}>
        <div className={style.product_image_container}>
          <img alt="Product" src={ROOT_URL + product.image} />
          
        </div>
        <div className={style.product_image_container_active}>
          <img alt="Product" src={ROOT_URL + product.image} />
          <div
              className={style.sale_percent_container_active}
              style={{ display: product.discont_price ? "block" : "none" }}
            >
              <p className={style.sale}>{saleHandle()}</p>
            </div>
        </div>
        
<div className={style.info}>
        <h2 className={style.title}>{product.title}</h2>
        <div className={style.price_plus_minus_button_container}>
          <div className={style.price_container}>
            <p className={style.sale_price}>
              {product.discont_price
                ? "$" + (product.discont_price * product.count).toFixed(2)
                : "$" + (product.price * product.count).toFixed(2)}
            </p>
            <p className={style.price}>
              {product.discont_price
                ? "$" + (product.price * product.count).toFixed(2)
                : ""}
              </p>
              <div className={style.sale_percent_container_none}>
            <div
              className={style.sale_percent_container}
              style={{ display: product.discont_price ? "block" : "none" }}
            >
              <p className={style.sale}>{saleHandle()}</p>
                </div>
                </div>
          </div>
          <div className={style.add_product_container}>
            <div className={style.plus_and_minus_and_button_container}>
              <div className={style.plus_and_minus_container}>
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
              <div className={style.btn_container}>
                <ButtonAddToCart
                  onClick={() => dispatch(addItemAction(product))}
                  title="Add to cart"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={style.description_container}>
          <p className={style.text_title}>Description</p>
          <p className={style.text}>{product.description}</p>
          </div>
</div>
      </div>
      <div className={style.description_container_active}>
          <p className={style.text_title}>Description</p>
          <p className={style.text}>{product.description}</p>
        </div>
    </div>
  );
}
