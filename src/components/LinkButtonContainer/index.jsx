import React from "react";
import style from "./LinkButtonContainer.module.css";

export default function LinkButtonContainer({ title }) {
  return (
    <div className={style.link_button_container}>
      <p className={style.title}>{title}</p>
      <div className={style.gray_lane}></div>
    </div>
  );
}
