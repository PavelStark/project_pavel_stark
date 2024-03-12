import React, { useEffect } from "react";
import AllSalesContainer from "../../components/AllSalesContainer";
import style from "./AllSalesPage.module.css";
import FilterProducts from "../../components/FilterProducts";

export default function AllSalesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="wrapper">
      <h2 className={style.all_sales_title}>Discounted Items</h2>
      <FilterProducts type="allSales" />
      <AllSalesContainer type="allSales" />
    </div>
  );
}
