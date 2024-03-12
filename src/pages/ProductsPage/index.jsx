import React from "react";
import ProductsContainer from "../../components/ProductsContainer";
import style from "./ProductsPage.module.css";
import FilteredProducts from "../../components/FilterProducts";

export default function ProductsPage() {
  return (
    <div className="wrapper">
      <h2 className={style.all_products_title}>All products</h2>
      <FilteredProducts />
      <ProductsContainer type="allProducts" />
    </div>
  );
}
