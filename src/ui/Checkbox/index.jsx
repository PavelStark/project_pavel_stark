import React from "react";
import style from "./MyCheckbox.module.css";
import { useDispatch } from "react-redux";
import { filterBySaleAction } from "../../store/reducers/productsReducer";

export default function MyCheckbox() {
  function SaleHandleBox(event) {
    useDispatch(filterBySaleAction(event.target.checked));
  }

  return (
    <div className={style.checkbox}>
      <input onClick={SaleHandleBox} type="checkbox" />
    </div>
  );
}
