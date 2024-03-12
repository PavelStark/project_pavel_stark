import React, { useState } from "react";
import style from "./ButtonCart.module.css";
import ModalWindow from "../../../components/modalWindow";

export default function ButtonCart({ btnTitle }) {

  const [active, setActive] = useState(false);

  const [modalActive, setModalActive] = useState(false);

  function handle() {
    setModalActive(true);
    setActive(true);
  }
  
  return (
    <div>
      <button
        onClick={() => handle()}
        className={active ? `${style.cart_btn_active}` : `${style.cart_btn}`}
        type="submit"
        disabled={active}
      >
        {active ? "The Order is Placed" : btnTitle}
      </button>
      <ModalWindow type="cartPage" active={modalActive} setActive={setModalActive} />
    </div>
  );
}
