import React from "react";
import { useDispatch } from "react-redux";
import {
  filterByPriceAction,
  filterBySaleAction,
  sortAction,
} from "../../store/reducers/productsReducer";
import style from "./FilterProducts.module.css";

export default function FilterProducts({ type }) {
  const dispatch = useDispatch();

  function SaleHandleBox(event) {
    dispatch(filterBySaleAction(event.target.checked));
  }

  function Sort(event) {
    dispatch(sortAction(event.target.value));
  }

  function priceFormHandler(event) {
    let form_data = new FormData(event.target.parentElement);
    let data = Object.fromEntries(form_data);

    data.from = data.from ? +data.from : 0;
    data.to = data.to ? +data.to : Infinity;

    console.log(data);

    dispatch(filterByPriceAction(data));
  }

  return (
    <div className={style.SortAllContainer}>
      <div className={style.PriceSortContainer}>
        <label>Price</label>
        <form className={style.formContainer} onKeyUp={priceFormHandler}>
          <input type="number" name="from" placeholder="from" />
          <input
            className={style.rightChild}
            type="number"
            name="to"
            placeholder="to"
          />
        </form>
      </div>
      <div
        className={style.filterContainer}
        style={{ display: type === "allSales" ? "none" : "flex" }}
      >
        <label>Discounted items</label>
        <input
          className={style.myCheckbox}
          onClick={SaleHandleBox}
          type="checkbox"
        />
      </div>
      <div className={style.SortedContainer}>
        <label>Sorted</label>
        <select onChange={Sort} id="dropdown" name="Sort">
          <option value="default">by default</option>
          <option value="newest">newest</option>
          <option value="price_low_hight">price: low-high</option>
          <option value="price_hight_low">price: high-low</option>
          <option value="sale_low_hight">sale: low-high</option>
          <option value="sale_hight_low">sale: high-low</option>
          <option value="title_A_Z">title: A-Z</option>
          <option value="title_Z_A">title: Z-A</option>
        </select>
      </div>
    </div>
  );
}
