"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Navbar.module.scss";
import stylesMobile from "./NavbarMobile.module.scss";
import SecondNavBar from "./SecondNavBar/SecondNavBar";
import {
  faAlignJustify,
  faCartArrowDown,
  faList,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import CartNavBar from "./CartNavBar/CartNavBar";
import { useState } from "react";

function Navbar() {
  const [navListOpen, setNavListOpen] = useState(true);

  const toggleNavList = () => {
    setNavListOpen(!navListOpen);
  };
  return (
    <div className={`position-relative ${styles["container"]}`}>
      <div
        className={`${stylesMobile["wrapper-icon-navbar"]} ${styles["wrapper-icon-navbar"]}`}
        onClick={toggleNavList}
      >
        <FontAwesomeIcon
          icon={faAlignJustify}
          className={`${stylesMobile["icon"]}`}
        />
      </div>
      <div
        className={`${styles["navbar"]} position-absolute  w-100`}
        style={{ display: navListOpen ? "block" : "none" }}
      >
        <ul className={`${styles["wrap-logo-navlink"]} mb-0 ps-0 `}>
          <li
            className={`h-100 d-flex align-items-center ${styles["wrap-logo"]}`}
          >
            <img
              className={`h-75 ${styles["logo"]}`}
              src="https://corretto.qodeinteractive.com/wp-content/themes/corretto/assets/img/logo-light.png"
              alt="light logo"
            />
          </li>
          <li className={`${styles["nav-container"]}h-100`}>
            <ul className={`${styles["nav-list"]}`}>
              <li
                className={`${styles["nav-item"]} position-relative text-uppercase text-white h-100`}
              >
                <Link
                  href="/"
                  className={`${styles["nav-link"]} align-items-center h-100 justify-content-center d-flex  text-decoration-none`}
                >
                  <span
                    className={`d-flex flex-column ${styles["item-outer"]} `}
                  >
                    Home
                  </span>
                </Link>
                <div
                  className={` ${styles["second-navbar"]} position-absolute`}
                >
                  {/* <SecondNavBar /> */}
                </div>
              </li>
              <li
                className={`${styles["nav-item"]} position-relative text-uppercase h-100`}
              >
                <Link
                  href="/"
                  className={`${styles["nav-link"]} align-items-center h-100 justify-content-center d-flex text-decoration-none`}
                >
                  <span
                    className={`d-flex flex-column ${styles["item-outer"]} `}
                  >
                    Menu
                  </span>
                </Link>
                <div
                  className={` ${styles["second-navbar"]} position-absolute`}
                >
                  <SecondNavBar />
                </div>
              </li>
              <li
                className={`${styles["nav-item"]} position-relative text-uppercase h-100`}
              >
                <Link
                  href="/shop"
                  className={`${styles["nav-link"]} align-items-center h-100 justify-content-center d-flex text-white text-decoration-none`}
                >
                  <span
                    className={`d-flex flex-column ${styles["item-outer"]} `}
                  >
                    Shop
                  </span>
                </Link>
                <div
                  className={` ${styles["second-navbar"]} position-absolute`}
                ></div>
              </li>
              {/* <li
                className={`${styles["nav-item"]} position-relative text-uppercase h-100`}
              >
                <Link
                  href="/"
                  className={`${styles["nav-link"]} align-items-center h-100 justify-content-center d-flex text-decoration-none`}
                >
                  <span
                    className={`d-flex flex-column ${styles["item-outer"]} `}
                  >
                    About
                  </span>
                </Link>
              </li> */}
              <li
                className={`${styles["nav-item"]} ${styles["cart-icon"]}  position-relative text-uppercase h-100`}
              >
                <Link
                  href="/cart"
                  className={`${styles["nav-link"]} align-items-center h-100 justify-content-center d-flex text-decoration-none`}
                >
                  <span
                    className={`d-flex flex-column ${styles["item-outer"]}`}
                  >
                    <span className={styles["number"]}>0</span>
                    <FontAwesomeIcon icon={faCartArrowDown} />
                  </span>
                </Link>
                <div
                  className={` ${styles["second-navbar-cart"]} position-absolute`}
                >
                  <CartNavBar />
                </div>
              </li>

              <li
                className={`${styles["nav-item"]} position-relative text-uppercase text-white h-100`}
              >
                <Link
                  href="/"
                  className={`${styles["nav-link"]} align-items-center h-100 justify-content-center d-flex text-white text-decoration-none`}
                >
                  <span
                    className={`d-flex flex-column ${styles["item-outer"]} `}
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                </Link>
              </li>

              <li
                className={`${styles["nav-item"]} position-relative text-uppercase text-white h-100`}
              >
                <Link
                  href="/login"
                  className={`${styles["nav-link"]} align-items-center h-100 justify-content-center d-flex text-white text-decoration-none`}
                >
                  <span
                    className={`d-flex flex-column ${styles["item-outer"]} `}
                  >
                    Login
                  </span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
