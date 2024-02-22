import React, { useEffect, useState } from "react";
import style from "./CartContainer.module.css";
import LinkButton from "../../ui/Buttons/LinkButton/linkButton";
import LinkButtonContainer from "../LinkButtonContainer";
import { useDispatch, useSelector } from "react-redux";
import { ROOT_URL } from "../..";
import plus from "../../ui/plus.png";
import minus from "../../ui/minus.png";
import xMark from "../../ui/xMark.png";
import {
  countCartDecrAction,
  countCartIncrAction,
  deliteItemAction,
  sumTotalAction,
} from "../../store/reducers/cartReducer";
import MainButton from "../../ui/Buttons/ButtonAddToCart/ButtonAddToCart";
import ModalWindow from "../modalWindow";
import { Link, useParams } from "react-router-dom";
import ButtonCheckOut from "../../ui/Buttons/ButtonCheckOut";
import { useForm } from "react-hook-form";

export default function CartContainer() {
  const { items, sumTotal, countItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleDiscountSubmit = (data) => {
    console.log(data);
    reset();
  };

  useEffect(() => {
    dispatch(sumTotalAction());
  }, [items, countItems, id, dispatch]);

  const [modalActive, setModalActive] = useState(false);

  return (
    <div>
      <div className={style.linkButtonAllContainer}>
        <LinkButtonContainer title="Shopping cart" />
        <div className={style.buttonNone}>
          <LinkButton buttonText="Back to the store" link="/products/all" />
        </div>
      </div>
      <div className={style.cartPageContainer}>
        <div className={style.cartPageContainerLetf}>
          {items.map((elem) => (
            <div className={style.cardContainer}>
              <div className={style.imageContainer}>
                <img src={ROOT_URL + elem.image} alt="Item" />
              </div>
              <div className={style.cardInfoContainer}>
                <div className={style.TitleAndCloseContainer}>
                  <p>{elem.title}</p>
                  <img
                    onClick={() => dispatch(deliteItemAction(elem.id))}
                    src={xMark}
                    alt=""
                  />
                </div>
                <div className={style.plusMinusAndPriceContainer}>
                  <div className={style.plusMinusContainer}>
                    <div
                      onClick={() => dispatch(countCartDecrAction(elem.id))}
                      className={style.minus}
                    >
                      <img src={minus} alt="" />
                    </div>
                    <div className={style.number}>
                      <p>{elem.count}</p>
                    </div>
                    <div
                      onClick={() => dispatch(countCartIncrAction(elem.id))}
                      className={style.plus}
                    >
                      <img src={plus} alt="" />
                    </div>
                  </div>
                  <div className={style.priceContainer}>
                    <p>
                      {elem.discont_price
                        ? "$" + (elem.discont_price * elem.count).toFixed(2)
                        : "$" + (elem.price * elem.count).toFixed(2)}
                    </p>
                    <p className={style.sale}>
                      {elem.discont_price
                        ? "$" + (elem.price * elem.count).toFixed(2)
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <form className={style.form} onSubmit={handleSubmit(handleDiscountSubmit)}>
          <div
            style={{ display: items.length === 0 ? "none" : "block" }}
            className={style.formAllContainer}>
            <div className={style.formContainer}>
              <p className={style.orderDetails}>Order details</p>
              <p className={style.totalItems}>{items.length} items</p>
              <div className={style.totalAndPriceContainer}>
                <p className={style.total}>Total</p>
                <p className={style.totalPrice}>${sumTotal}</p>
              </div>
            </div>
            <div className={style.inputContainer}>
              <label htmlFor="name">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  {...register("name", {
                    required: "The field is required",
                    minLength: {
                      value: 2,
                      message: "Name is too short...min length: 2",
                    },
                    maxLength: {
                      value: 20,
                      message: "Name is too long...max length: 20",
                    },
                  })}
                />
                <p>{errors.name?.message}</p>
              </label>
              <label htmlFor="Phone number">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone number"
                  {...register("phone", {
                    required: "The field is required",
                    pattern: {
                      value: "/(?+(?49)?[ ()]?([- ()]?d[- ()]?){10}/g",
                      message:
                        "Phone number must be with the country code Germany ",
                    },
                  })}
                />
                <p>{errors.phone?.message}</p>
              </label>
              <label htmlFor="Email">
                <input
                  className={style.lastInput}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "The field is required",
                    pattern: {
                      value: /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g,
                      message: "Email is not correct",
                    },
                  })}
                />
                <p>{errors.email?.message}</p>
              </label>
              <MainButton
                widthBtn={484}
                title="Order"
                onClick={() => setModalActive(true)}
              />
            </div>
          </div>
        </form>
        <div style={{ display: items.length > 0 ? "none" : "block" }}>
          <p className={style.emptyBasketText}>
            Looks like you have no items in your basket currently.
          </p>
          <div className={style.buttonContainer}>
            <Link to="/products/all">
              <ButtonCheckOut text="Continue Shopping" />
            </Link>
          </div>
        </div>
      </div>
      <div className={style.linkButtonAllContainer2}>
        <LinkButton buttonText="Back to the store" link="/products/all" />
      </div>
      <ModalWindow active={modalActive} setActive={setModalActive} />
    </div>
  );
}
