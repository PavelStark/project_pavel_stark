import React from "react";
import style from "./Coupon.module.css";
import HANDS from "../../media/Discount.png";
import { useForm } from "react-hook-form";
import ButtonCoupon from "../../ui/Buttons/ButtonCoupon/ButtonCoupon";

export default function Coupon() {
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

  return (
    <div>
      <div className={style.coupon_container}>
        <div className={style.title_container}>
          <p className={style.title}>5% off on the first order</p>
        </div>
        <div className={style.img_container}>
          <img src={HANDS} alt="HANDS" />
        </div>
        <form onSubmit={handleSubmit(handleDiscountSubmit)}>
          <div className={style.form_container}>
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

            <label htmlFor="phone">
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

            <label htmlFor="email">
              <input
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
            <ButtonCoupon btnTitle="Get a discount" className={style.btn} /* type="submit" */ />
          </div>
        </form>
      </div>
    </div>
  );
}
