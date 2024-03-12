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
import ModalWindow from "../modalWindow";
import { Link } from "react-router-dom";
import ButtonCheckOut from "../../ui/Buttons/ButtonCheckOut";
import { useForm } from "react-hook-form";
import ButtonCart from "../../ui/Buttons/ButtonCart";

export default function CartContainer() {
  const { items, sumTotal, } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  

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
    window.scrollTo(0, 0);
    dispatch(sumTotalAction());
  }, [dispatch]);

  const [modalActive, setModalActive] = useState(false);

  return (
    <div>
      <div className={style.link_button_all_container}>
        <LinkButtonContainer title="Shopping cart" />
        <div className={style.button_none}>
          <LinkButton buttonText="Back to the store" link="/products/all" />
        </div>
      </div>
      <div className={style.cart_page_container}>
        <div className={style.cart_page_container_left}>
          {items.map((elem) => (
            <div className={style.card_container}>
              <div className={style.image_container}>
                <img src={ROOT_URL + elem.image} alt="Item" />
              </div>
              <div className={style.card_info_container}>
                <div className={style.title_and_close_container}>
                  <p>{elem.title}</p>
                  <img
                    onClick={() => dispatch(deliteItemAction(elem.id))}
                    src={xMark}
                    alt=""
                  />
                </div>
                <div className={style.plus_minus_and_price_container}>
                  <div className={style.plus_minus_container}>
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
                  <div className={style.price_container}>
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
        <form
          className={style.form}
          style={{ display: items.length === 0 ? "none" : "block" }}
          onSubmit={handleSubmit(handleDiscountSubmit)}
        >
            <div className={style.form_container}>
              <p className={style.order_details}>Order details</p>
              <p className={style.total_items}>{items.length} items</p>
              <div className={style.total_and_price_container}>
                <p className={style.total}>Total</p>
                <p className={style.total_price}>${sumTotal}</p>
              </div>
            </div>
            <div className={style.input_container}>
              <label htmlFor="name">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  {...register("name", {
                    required: "",
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
                    required: "",
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
                  className={style.last_input}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "",
                    pattern: {
                      value: /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g,
                      message: "Email is not correct",
                    },
                  })}
                />
                <p>{errors.email?.message}</p>
              </label>
              <ButtonCart
                btnTitle="Order"
                onClick={() => setModalActive(true)}
              />
            </div>
        </form>
        <div style={{ display: items.length > 0 ? "none" : "block" }}>
          <p className={style.empty_basket_text}>
            Looks like you have no items in your basket currently.
          </p>
          <div className={style.button_container}>
            <Link to="/products/all">
              <ButtonCheckOut text="Continue Shopping" />
            </Link>
          </div>
        </div>
      </div>
      <div className={style.link_button_all_container2}>
        <LinkButton buttonText="Back to the store" link="/products/all" />
      </div>
        <ModalWindow type="cartPage" active={modalActive} setActive={setModalActive} />
  </div>
  );
}
