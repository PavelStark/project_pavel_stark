import React from "react";
import style from "./Header.module.css";
import logo from "../../ui/logo.png";
import cartLogo from "../../ui/basketLogo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BurgerMenu from "../BurgerMenu";

export default function Header() {
  const { items } = useSelector((store) => store.cart);

  //--------------------------------------------------------------------------
  const selectTotalItemCount = items.reduce(
    (total, item) => total + item.count,
    0
  );
  //--------------------------------------------------------------------------

  return (
    <div className="wrapper">
      <header>
        <div>
          <Link to={"/"}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className={style.navbar}>
          <ul>
            <li>
              <Link to={"/"}> Main Page </Link>
            </li>
            <li>
              <Link to={"/categories/all"}> Categories </Link>
            </li>
            <li>
              <Link to={"/products/all"}> All products </Link>
            </li>
            <li>
              <Link to={"/sales/all"}> All sales </Link>
            </li>
          </ul>
        </div>
        <div className={style.basketItem}>
          <div className={style.cartCircleContainer}>
            <div
              style={{ display: selectTotalItemCount !== 0 ? "flex" : "none" }}
              className={style.circle}
            >
              <p>{selectTotalItemCount}</p>
            </div>
            <div className={style.cartLogoContainer}>
              <Link to={"/cart/"}>
                <img className={style.cartLogo} src={cartLogo} alt="CartLogo" />
              </Link>
            </div>
          </div>
        </div>
        <div className={style.burger}>
          <BurgerMenu />
        </div>
      </header>
      <div className={style.line}></div>
    </div>
  );
}
