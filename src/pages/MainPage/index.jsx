import React, { useRef } from "react";
import style from "./MainPage.module.css";
import CategoriesContainer from "../../components/CategoriesContainer";
import LinkButtonContainer from "../../components/LinkButtonContainer";
import LinkButton from "../../ui/Buttons/LinkButton/linkButton";
import ProductsContainer from "../../components/ProductsContainer";
import Coupon from "../../components/Coupon";
import ButtonCheckOut from "../../ui/Buttons/ButtonCheckOut";

export default function MainPage(props) {
  //-----------------------------------using ref for scroll

  const saleRef = useRef();

  const handleClick = () => {
    saleRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className={style.banner_container}>
        <div className={style.banner}>
          <p className={style.banner_text}>
            Amazing Discounts on Garden Products!
          </p>
          <div className={style.button_check_out_container}>
            <ButtonCheckOut text="Check out" onClick={handleClick} />
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className={style.link_button_all_container}>
          <LinkButtonContainer title="Categories" />
          <div className={style.link_button_categories}>
            <LinkButton buttonText="All Categories" link="/categories/all" />
          </div>
        </div>

        <div className={style.categories_not_all_container}>
          <CategoriesContainer type="notAllCategories" />
        </div>

        <div className={style.link_button_categories_active}>
          <LinkButton buttonText="All Categories" link="/categories/all" />
        </div>

        <Coupon />

        <div ref={saleRef} className={style.link_button_all_container}>
          <LinkButtonContainer title="Sale" />
          <div className={style.link_button_sales}>
            <LinkButton buttonText="All Sales" link="/sales/all" />
          </div>
        </div>

        <div className={style.top_sales_container}>
          <ProductsContainer type="topSales" />
        </div>
        <div className={style.link_button_sales_active}>
          <LinkButton buttonText="All Sales" link="/sales/all" />
        </div>
      </div>
    </div>
  );
}
