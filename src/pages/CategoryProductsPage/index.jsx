import React from "react";
import CategoryProductsContainer from "../../components/CategoryProductsContainer";
import style from "./CategoryProductsPage.module.css";
import { useSelector } from "react-redux";
import FilteredProducts from "../../components/FilterProducts";

export default function CategoryProductsPage() {
  const { category_title } = useSelector((store) => store.products);

  return (
    <div className="wrapper">
      <h2 className={style.category_title}>{category_title}</h2>
      <FilteredProducts />
      <CategoryProductsContainer />
    </div>
  );
}
