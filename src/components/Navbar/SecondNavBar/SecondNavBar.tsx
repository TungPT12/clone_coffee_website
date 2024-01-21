/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import styles from "./SecondNavBar.module.scss";
function SecondNavBar() {
  return (
    <ul className={`position-relative ${styles["second-navbar"]}`}>
      <li className={`${styles["second-item"]}`}>
        <Link
          href={"/"}
          className={`${styles["second-nav-link"]} text-decoration-none text-white`}
        >
          <span className={`${styles["outer"]}`}>Coffe</span>
        </Link>
      </li>
      <li className={`${styles["second-item"]}`}>
        <Link
          href={"/"}
          className={`${styles["second-nav-link"]} text-decoration-none text-white`}
        >
          <span className={`${styles["outer"]}`}>Breakfast</span>
        </Link>
      </li>
      <li className={`${styles["second-item"]}`}>
        <Link
          href={"/"}
          className={`${styles["second-nav-link"]} text-decoration-none text-white`}
        >
          <span className={`${styles["outer"]}`}>Drinks</span>
        </Link>
      </li>
      <li className={`${styles["second-item"]}`}>
        <Link
          href={"/"}
          className={`${styles["second-nav-link"]} text-decoration-none text-white`}
        >
          <span className={`${styles["outer"]}`}>Tea</span>
        </Link>
      </li>
    </ul>
  );
}

export default SecondNavBar;
