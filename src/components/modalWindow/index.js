import style from "./modalWindow.module.css"
import xMark2 from "../../ui/xMark2.png"
import React from "react";

const ModalWindow = ({ active, setActive }) => {
  return (
    <div className={`${style.modal} ${active && style.active}`} onClick={() => setActive(false)}>
      <div className={style.modal_content} onClick={(event) => event.stopPropagation()}>
        <div className={style.textContainer}>
          <p className={style.title}>Congratulations!</p>
          <p>Your order has been successfully placed on the website.</p>
          <p>A manager will contact you shortly to confirm your order.</p>
          <img src={xMark2} alt="" onClick={() => setActive(false)}/>
        </div>
      </div>
    </div>
  );
};
export default ModalWindow

