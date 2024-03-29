/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect } from "react";
import styles from "./SecondNavBar.module.scss";
import i18n from "@/config/i18n";

function SecondNavBar() {
  const handleLangItemClick = (lng: any) => {
    i18n.changeLanguage(lng);
  };

  return (
    <ul className={`position-relative ${styles["second-navbar"]}`}>
      <li className={`${styles["second-item"]}`}>
        <div
          className={`${styles["second-nav-link"]} text-decoration-none text-white`}
        >
          <span
            className={`${styles["outer"]}`}
            onClick={() => handleLangItemClick("en")}
          >
            English
          </span>
        </div>
      </li>

      <li className={`${styles["second-item"]}`}>
        <div
          className={`${styles["second-nav-link"]} text-decoration-none text-white`}
        >
          <span
            className={`${styles["outer"]}`}
            onClick={() => handleLangItemClick("vi")}
          >
            Tiếng việt
          </span>
        </div>
      </li>
    </ul>
  );
}

export default SecondNavBar;
