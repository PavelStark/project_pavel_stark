import React from "react";
import style from "./LinkButtonContainer.module.css";

export default function LinkButtonContainer({ title }) {
  return (
    <div className={style.linkButtonContainer}>
      <p className={style.title}>{title}</p>
      <div className={style.grayLane}></div>
    </div>
  );
}
