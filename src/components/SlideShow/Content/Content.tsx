/* eslint-disable @next/next/no-img-element */
"use client";
import "react-slideshow-image/dist/styles.css";
import styles from "./Content.module.scss";
import Translation from "@/components/Translation/Translation";

function Content({ title, text }: any) {
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
        <button>
          <Translation text="SHOP HERE" />
        </button>
      </div>
    </div>
  );
}

export default Content;
