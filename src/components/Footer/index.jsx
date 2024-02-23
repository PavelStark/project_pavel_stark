import React from "react";
import style from "./Footer.module.css";
import instagram from "../../ui/Instagram.png";
import whatsApp from "../../ui/WhatsApp.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="wrapper">
      <p className={style.contact}>Contact</p>
      <div className={style.footerContainer}>
        <div className={style.phone}>
          <p className={style.thin}>Phone</p>
          <p className={style.bold}>+49 999 999 99 99</p>
        </div>

        <div className={style.social}>
          <p className={style.thin}>Socials</p>

          <div className={style.icons}>
            <div className={style.inst}>
              <Link to="https://www.instagram.com/" target="blank">
                <img
                  className={style.instagram}
                  src={instagram}
                  alt="Instagram"
                />
              </Link>
            </div>
            <div>
              <Link to="https://www.whatsapp.com/" target="blank">
                <img className={style.whatsApp} src={whatsApp} alt="WhatsApp" />
              </Link>
            </div>
          </div>
        </div>
        <div className={style.adress}>
          <p className={style.thin}>Address</p>
          <p className={style.bold}>
            Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland
          </p>
        </div>
        <div className={style.working_hours}>
          <p className={style.thin}>Working Hours</p>
          <p className={style.bold}>24 hours a day</p>
        </div>
      </div>

      <div className={style.map}>
        <iframe
          title="asd"
          width="100%"
          height="350"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=1440&amp;height=350&amp;hl=en&amp;q=Starta%20Institute%20by%20Tel-Ran+(Starta%20Institute%20by%20Tel-Ran)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </footer>
  );
}
