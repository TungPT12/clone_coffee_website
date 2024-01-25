/* eslint-disable @next/next/no-img-element */
"use client";
import logo from "../../../assets/Brown White Modern Elegant Round Coffee Shop Logo.svg";
import "react-slideshow-image/dist/styles.css";
import styles from "./Content.module.scss";
function Content({ title, text }: any) {
  return (
    <div
      className={`${styles["content"]} show position-absolute align-items-center h-100 justify-content-center  text-white text-decoration-none`}
    >
      <img
        className={`${styles["logo"]} ${styles["top-to-bottom"]}`}
        src={logo}
        alt="helo"
      />

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
        <button className="">SHOP HERE</button>
      </div>
    </div>
  );
}

export default Content;
