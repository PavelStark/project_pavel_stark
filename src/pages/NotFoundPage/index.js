import React from "react";
import notFoundPageImage from "../../media/404.png";
import style from "./NotFoundPage.module.css";
import { Link } from "react-router-dom";
import ButtonCheckOut from "../../ui/Buttons/ButtonCheckOut";

export default function NotFoundPage() {
  return (
    <div className="wrapper">
      <div className={style.notFoundPageContainer}>
        <img
          className={style.notFoundPageImage}
          src={notFoundPageImage}
          alt="NotFoundPageImage"
        ></img>
        <p className={style.title}>Page Not Found </p>
        <p className={style.text}>We’re sorry, the page you requested could not be found. Please go back to the homepage.</p>
        <div className={style.btnContainer}>
        <Link to="/">
        <ButtonCheckOut text="Go Home" />
          </Link>
        </div>
      </div>
    </div>
  );
}
