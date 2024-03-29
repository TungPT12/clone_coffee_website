/* eslint-disable @next/next/no-img-element */
"use client";
import logo from "../../../assets/avatar.svg";
import "react-slideshow-image/dist/styles.css";
import styles from "./Content.module.scss";
import { useTranslation } from "react-i18next";

function Content({ title, text }: any) {
  const { t } = useTranslation();
  return (
    <div
      className={`${styles["content"]} show position-absolute align-items-center h-100 justify-content-center  text-white text-decoration-none`}
    >
      <picture>
        <img
          className={`${styles["logo"]} ${styles["top-to-bottom"]}`}
          src="./avatar.svg"
          alt=""
        />
      </picture>

      <h1
        className={`${styles["title"]} text-uppercase ${styles["top-to-bottom-first"]}`}
      >
        {title}
      </h1>
      <br />
      <h2 className={`${styles["text"]} ${styles["top-to-bottom-second"]}`}>
        {text}
      </h2>
      <div className={`${styles["button"]} ${styles["top-to-bottom-third"]}`}>
        <button className="">{t("SHOP HERE")}</button>
      </div>
    </div>
  );
}

export default Content;
