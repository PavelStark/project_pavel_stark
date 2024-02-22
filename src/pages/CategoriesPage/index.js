import React, { useEffect } from "react";
import CategoriesContainer from "../../components/CategoriesContainer";
import style from "./CategoriesPage.module.css";

export default function CategoriesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="wrapper">
      <h2 className={style.CategoriesTitle}>Categories</h2>
      <CategoriesContainer type="allCategories" />
    </div>
  );
}
