import React, { useState } from "react";
import style from "./ButtonCoupon.module.css";
import ModalWindow from "../../../components/modalWindow";

export default function ButtonCoupon({ btnTitle }) {

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
        className={active ? `${style.coupon_btn_active}` : `${style.coupon_btn}`}
        type="submit"
        disabled={active}
      >
        {active ? "Request Submitted" : btnTitle}
      </button>
      <ModalWindow active={modalActive} setActive={setModalActive} />
    </div>
  );
}
