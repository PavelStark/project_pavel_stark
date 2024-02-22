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
      <div className={style.banner}>
        <p className={style.bannerText}>
          Amazing Discounts on Garden Products!
        </p>
        <div className={style.ButtonCheckOutContainer}>
          <ButtonCheckOut text="Check out" onClick={handleClick} />
        </div>
      </div>
      <div className="wrapper">
        <div className={style.linkButtonAllContainer}>
          <LinkButtonContainer title="Categories" />
          <div className={style.linkButtonCategories}>
            <LinkButton buttonText="All Categories" link="/categories/all" />
          </div>
        </div>

        <div className={style.categoriesNotAllContainer}>
          <CategoriesContainer type="notAllCategories" />
        </div>

        <div className={style.linkButtonCategoriesActive}>
          <LinkButton buttonText="All Categories" link="/categories/all" />
        </div>

        <Coupon />

        <div ref={saleRef} className={style.linkButtonAllContainer}>
          <LinkButtonContainer title="Sale" />
          <div className={style.linkButtonSales}>
            <LinkButton buttonText="All Sales" link="/sales/all" />
          </div>
        </div>

        <div className={style.topSalesContainer}>
          <ProductsContainer type="topSales" />
        </div>
        <div className={style.linkButtonSalesActive}>
          <LinkButton buttonText="All Sales" link="/sales/all" />
        </div>
      </div>
    </div>
  );
}
