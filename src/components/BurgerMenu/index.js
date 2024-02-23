import React, { useState } from "react";
import style from "./BurgerMenu.module.css";
import { Link } from "react-router-dom";

export default function BurgerMenu() {
  const [active, setActive] = useState(false);

  return (
    <div className={style.burgerMenuContainer}>
      <div
        className={
          active ? `${style.burger_menu_active}` : `${style.burger_menu}`
        }
        onClick={() => setActive(!active)}
      >
        <span className={style.line}></span>
        <span className={style.line}></span>
        <span className={style.line}></span>
      </div>
      <div
        className={active ? `${style.navbar_active}` : `${style.navbar}`}
        onClick={() => setActive(!active)}
      >
        <Link onClick={() => setActive(!active)} to={"/"}>
          {" "}
          Main Page{" "}
        </Link>
        <Link onClick={() => setActive(!active)} to={"/categories/all"}>
          {" "}
          Categories{" "}
        </Link>
        <Link onClick={() => setActive(!active)} to={"/products/all"}>
          {" "}
          All products{" "}
        </Link>
        <Link onClick={() => setActive(!active)} to={"/sales/all"}>
          {" "}
          All sales{" "}
        </Link>
      </div>
    </div>
  );
}
