"use client";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import SecondNavBar from "./SecondNavBar/SecondNavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import CartNavBar from "./CartNavBar/CartNavBar";

function Navbar() {
  return (
    <div className="position-relative">
      <div className={`${styles["navbar"]} position-absolute  w-100 px-5`}>
        <ul className={`d-flex justify-content-between h-100 mb-0 ps-0 `}>
          <li className="h-100 d-flex align-items-center">
            <img
              className={`h-75`}
              src="https://corretto.qodeinteractive.com/wp-content/themes/corretto/assets/img/logo-light.png"
              alt="light logo"
            />
          </li>
          <li className={`h-100`}>
            <ul className={`d-flex h-100 d-flex gap-5`}>
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
                className={`${styles["nav-item"]} position-relative text-uppercase text-white h-100`}
              >
                <Link
                  href="/"
                  className={`${styles["nav-link"]} align-items-center h-100 justify-content-center d-flex text-white text-decoration-none`}
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
                className={`${styles["nav-item"]} position-relative text-uppercase text-white h-100`}
              >
                <Link
                  href="/"
                  className={`${styles["nav-link"]} align-items-center h-100 justify-content-center d-flex text-white text-decoration-none`}
                >
                  <span
                    className={`d-flex flex-column ${styles["item-outer"]} `}
                  >
                    PAGES
                  </span>
                </Link>
                <div
                  className={` ${styles["second-navbar"]} position-absolute`}
                >
                  {/* <SecondNavBar /> */}
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
                    About
                  </span>
                </Link>
              </li>
              <li
                className={`${styles["nav-item"]} ${styles["cart-icon"]}  position-relative text-uppercase text-white h-100`}
              >
                <Link
                  href="/cart"
                  className={`${styles["nav-link"]} align-items-center h-100 justify-content-center d-flex text-white text-decoration-none`}
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
                  href="/"
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
