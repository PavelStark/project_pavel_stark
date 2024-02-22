import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ROOT_URL } from "../../index";
import { fetchCategories } from "../../asyncActions/categories";
import style from "./Categories.module.css";

export default function CategoriesContainer({ type }) {
  const { categories } = useSelector((store) => store.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories(type));
  }, [dispatch, type]);


  return (
    <div className={ type === "notAllCategories"  ? `${style.categoriesNotAllContainer}` : `${style.categoriesContainer}`}>


      {categories.map((elem) => (
        <Link to={"/categories/" + elem.id} key={elem.id}>
          <div>
            <img
              alt="categorieImage"
              className={style.categoryImage}
              src={ROOT_URL + elem.image}
            />
            <p className={style.categoryTitle}>{elem.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
