import React, { useState } from "react";
import style from "./ButtonCoupon.module.css";
import ModalWindow from "../../../components/modalWindow";

export default function ButtonCoupon() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div>
      <button
        onClick={() => setModalActive(true)}
        className={style.couponBtn}
        type="submit"
      >
        Get a discount
      </button>
      <ModalWindow active={modalActive} setActive={setModalActive} />
    </div>
  );
}
