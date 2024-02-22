import { useState } from "react";
import style from "./ButtonAddToCart.module.css";

export default function ButtonAddToCart({ title, onClick, ...otherProps }) {
  const [active, setActive] = useState(false);

  function handle(e) {
    onClick(e);
    setActive(true);
  }

  return (
    <button
      {...otherProps}
      className={active ? `${style.btn_active}` : `${style.btn}`}
      onClick={handle}
      /* disabled={active} */
    >
      {active ? "Added" : title}
    </button>
  );
}
